import {
  Component,
  ElementRef,
  ViewChild,
  effect,
  signal,
  computed,
  inject,
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from '../../../core/pipes/time-ago.pipe';

type DockState = 'list' | 'thread' | 'minimized';

export interface ThreadSummary {
  id: string;
  name: string;
  avatar: string;
  preview: string;
  time: Date;
  unread: number;
}

export interface Message {
  id: string;
  threadId: string;
  me: boolean;
  html: string;
  at: Date;
}

@Component({
  selector: 'app-chat-dock',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, TimeAgoPipe],
  templateUrl: './chat-dock.component.html',
  styleUrls: ['./chat-dock.component.scss'],
})
export class ChatDockComponent {
  // ===== UI refs =====
  @ViewChild('scrollRegion') private scrollRegion?: ElementRef<HTMLDivElement>;

  // ===== signals (local store) =====
  state = signal<DockState>('list');                      // list | thread | minimized
  threads = signal<ThreadSummary[]>([
    {
      id: 't1',
      name: 'Abdullah',
      avatar: 'https://i.pravatar.cc/80?img=12',
      preview: 'Assalamu alaikum! Are you joining the live?',
      time: new Date(Date.now() - 1000 * 60 * 5),
      unread: 2,
    },
    {
      id: 't2',
      name: 'Sister H.',
      avatar: 'https://i.pravatar.cc/80?img=32',
      preview: 'JazakAllahu khair for the notes!',
      time: new Date(Date.now() - 1000 * 60 * 55),
      unread: 0,
    },
  ]);

  messages = signal<Message[]>([
    {
      id: 'm1',
      threadId: 't1',
      me: false,
      html: 'Assalamu alaikum!',
      at: new Date(Date.now() - 1000 * 60 * 6),
    },
    {
      id: 'm2',
      threadId: 't1',
      me: true,
      html: 'Wa alaikum assalam! Inshallah.',
      at: new Date(Date.now() - 1000 * 60 * 5),
    },
  ]);

  activeThreadId = signal<string | null>(null);
  draft = signal<string>('');

  // Derived
  active = computed(() => {
    const id = this.activeThreadId();
    return this.threads().find(t => t.id === id) ?? null;
  });

  activeMessages = computed(() => {
    const id = this.activeThreadId();
    return id ? this.messages().filter(m => m.threadId === id) : [];
  });

  // Auto-scroll to bottom whenever activeMessages change or state enters 'thread'
  private autoScroll = effect(() => {
    // read signals to subscribe
    const _msgs = this.activeMessages();
    const _state = this.state();

    if (_state !== 'thread') return;

    queueMicrotask(() => {
      const el = this.scrollRegion?.nativeElement;
      if (!el) return;
      el.scrollTop = el.scrollHeight;
    });
  });

  // ====== UI actions ======
  minimize() {
    if (this.state() === 'minimized') {
      this.state.set('list');
    } else {
      this.state.set('minimized');
    }
  }

  close() {
    // if you need different behavior (e.g., hide completely), flip a global flag
    this.state.set('minimized');
  }

  openThread(t: ThreadSummary) {
    this.activeThreadId.set(t.id);
    this.state.set('thread');

    // clear unread for this thread
    this.threads.update(list =>
      list.map(x => (x.id === t.id ? { ...x, unread: 0 } : x))
    );
  }

  back() {
    this.activeThreadId.set(null);
    this.state.set('list');
  }

  attach() {
    // hook your file picker here
    // you can also open an overlay; keep it simple for now
    // noop
  }

  send() {
    const text = this.draft().trim();
    const threadId = this.activeThreadId();
    if (!text || !threadId) return;

    const newMsg: Message = {
      id: crypto.randomUUID(),
      threadId,
      me: true,
      html: this.escapeAndLink(text),
      at: new Date(),
    };

    this.messages.update(arr => [...arr, newMsg]);
    this.draft.set('');

    // update thread preview + time
    this.threads.update(list =>
      list.map(t =>
        t.id === threadId
          ? { ...t, preview: text, time: newMsg.at }
          : t
      )
    );

    // simulate a reply (demo). Remove when wiring backend.
    this.simulateReply(threadId);
  }

  // ====== helpers ======
  private simulateReply(threadId: string) {
    setTimeout(() => {
      const m: Message = {
        id: crypto.randomUUID(),
        threadId,
        me: false,
        html: '👍',
        at: new Date(),
      };
      this.messages.update(arr => [...arr, m]);
      // bump unread on summary if not focused (optional)
      if (this.activeThreadId() !== threadId || this.state() !== 'thread') {
        this.threads.update(list =>
          list.map(t =>
            t.id === threadId ? { ...t, preview: '👍', time: m.at, unread: t.unread + 1 } : t
          )
        );
      } else {
        // update preview/time without unread
        this.threads.update(list =>
          list.map(t => (t.id === threadId ? { ...t, preview: '👍', time: m.at } : t))
        );
      }
    }, 800);
  }

  private escapeAndLink(s: string): string {
    // super light XSS guard + linkify (you’ll still sanitize in template if needed)
    const esc = s
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;');
    const urlRegex =
      /(https?:\/\/[^\s]+)/g;
    return esc.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
  }
}
