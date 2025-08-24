import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../../../shared/components/post-card/post-card.component';

import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CommonModule, FormsModule, PostCardComponent                           ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  posts = [
    { id: '1', title: 'Friday Reminder', excerpt: 'Dhikr and reflection…', author: 'Imam A.', time: new Date() },
    { id: '2', title: 'Hadith of the day', excerpt: '“Actions are by intentions…”', author: 'Sister H.', time: new Date() },
  ];
  events = [
    { id: 'e1', title: 'Tafsir Session', startsAt: new Date(Date.now()+86400000), location: 'Online' },
  ];
  videos = [
    { id: 'v1', title: 'Surah Yasin', youtubeId: 'dQw4w9WgXcQ' },
  ];
}
