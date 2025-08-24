import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from '../../../core/pipes/time-ago.pipe';

type Answer = { id: string; author: string; votes: number; time: Date; html: string; accepted?: boolean };

@Component({
  standalone: true,
  selector: 'app-question-detail',
  imports: [CommonModule, FormsModule, TimeAgoPipe],
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss'],
})
export class QuestionDetailComponent {
  question = {
    id: 'q1',
    title: 'What breaks wudu?',
    author: 'Aisha',
    time: new Date(Date.now() - 3600_000),
    tags: ['fiqh', 'wudu'],
    bodyHtml: `<p>List the actions that invalidate wudu with brief evidence if possible.</p>`,
    votes: 12,
  };

  answers: Answer[] = [
    { id: 'a1', author: 'Imam A.', votes: 15, time: new Date(), html: 'Passing wind, urination, defecation, deep sleep…', accepted: true },
    { id: 'a2', author: 'Omar', votes: 3, time: new Date(), html: 'Also loss of consciousness in general.' },
  ];

  draft = '';

  upvoteQ()    { this.question.votes++; }
  downvoteQ()  { this.question.votes--; }
  upvoteA(a: Answer)   { a.votes++; }
  downvoteA(a: Answer) { a.votes--; }

  submitAnswer() {
    const text = this.draft.trim();
    if (!text) return;
    this.answers.unshift({
      id: crypto.randomUUID(),
      author: 'You',
      votes: 0,
      time: new Date(),
      html: this.escape(text),
    });
    this.draft = '';
  }

  private escape(s: string) {
    return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')
            .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
  }
}
