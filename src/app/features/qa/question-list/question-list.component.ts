import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

type QItem = { id: string; title: string; tags: string[]; votes: number; answers: number; askedAt: Date; author: string };

@Component({
  standalone: true,
  selector: 'app-question-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent {
  q = '';
  tag = '';
  sort: 'new' | 'votes' | 'answers' = 'new';

  questions: QItem[] = [
    { id: 'q1', title: 'What breaks wudu?', tags: ['fiqh','wudu'], votes: 12, answers: 3, askedAt: new Date(), author: 'Aisha' },
    { id: 'q2', title: 'How to memorize Surah Yasin?', tags: ['quran','memorization'], votes: 7, answers: 1, askedAt: new Date(), author: 'Omar' },
  ];

  get filtered(): QItem[] {
    const s = this.q.trim().toLowerCase();
    let list = this.questions.filter(x =>
      (!s || x.title.toLowerCase().includes(s)) &&
      (!this.tag || x.tags.includes(this.tag))
    );
    switch (this.sort) {
      case 'votes':   list = list.sort((a,b)=>b.votes-a.votes); break;
      case 'answers': list = list.sort((a,b)=>b.answers-a.answers); break;
      default:        list = list.sort((a,b)=>b.askedAt.getTime()-a.askedAt.getTime());
    }
    return list;
  }
}
