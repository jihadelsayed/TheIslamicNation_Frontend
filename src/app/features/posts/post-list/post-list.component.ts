import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostCardComponent } from '../../../shared/components/post-card/post-card.component';
import { FormsModule } from '@angular/forms';

type Post = { id: string; title: string; excerpt: string; author: string; time: Date; group?: string; type?: 'post'|'video'|'link' };

@Component({
  standalone: true,
  selector: 'app-post-list',
  imports: [CommonModule, FormsModule, RouterLink, PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  q = '';
  type: 'all'|'post'|'video'|'link' = 'all';

  posts: Post[] = [
    { id: '1', title: 'Friday Reminder', excerpt: 'Dhikr and reflection…', author: 'Imam A.', time: new Date(), group: 'Qur’an Study', type: 'post' },
    { id: '2', title: 'Surah Yasin Clip', excerpt: 'Short clip…', author: 'Sister H.', time: new Date(), group: 'Hadith Circle', type: 'video' },
    { id: '3', title: 'Great resource', excerpt: 'External link…', author: 'Omar', time: new Date(), group: 'Islamic History', type: 'link' },
  ];

  get filtered() {
    const s = this.q.trim().toLowerCase();
    return this.posts.filter(p => {
      const matchType = this.type === 'all' ? true : p.type === this.type;
      const matchText = !s || p.title.toLowerCase().includes(s) || p.excerpt.toLowerCase().includes(s) || (p.group||'').toLowerCase().includes(s);
      return matchType && matchText;
    });
  }
}
