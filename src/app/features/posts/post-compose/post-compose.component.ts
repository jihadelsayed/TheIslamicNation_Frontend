import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type PostType = 'post' | 'video' | 'link';

type PostModel = {
  title: string;
  type: PostType;
  group: string;
  content: string;
  videoUrl: string;
  linkUrl: string;
  attachments: File[];
};

@Component({
  standalone: true,
  selector: 'app-post-compose',
  imports: [CommonModule, FormsModule],
  templateUrl: './post-compose.component.html',
  styleUrls: ['./post-compose.component.scss'],
})
export class PostComposeComponent {
  groups = [
    { slug: 'quran-study', name: 'Qur’an Study' },
    { slug: 'hadith-circle', name: 'Hadith Circle' },
  ];

  model = signal<PostModel>({
    title: '',
    type: 'post',
    group: '',
    content: '',
    videoUrl: '',
    linkUrl: '',
    attachments: [],
  });

  // one tiny helper so templates stay clean
  update<K extends keyof PostModel>(key: K, value: PostModel[K]) {
    this.model.update(m => ({ ...m, [key]: value }));
  }

  onFileChange(ev: Event) {
    const input = ev.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    this.model.update(m => ({ ...m, attachments: [...m.attachments, ...files] }));
    if (input) input.value = '';
  }

  removeAttachment(i: number) {
    this.model.update(m => ({ ...m, attachments: m.attachments.filter((_, idx) => idx !== i) }));
  }

  submit() {
    const data = this.model();
    alert(
      `Submit post:\n${JSON.stringify(
        { ...data, attachments: data.attachments.map(f => f.name) },
        null,
        2
      )}`
    );
  }
}
