import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-event-detail',
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent {
  event = {
    id: 'e1',
    title: 'Tafsir Session',
    startsAt: new Date(Date.now() + 86_400_000),
    endsAt: new Date(Date.now() + 86_400_000 + 90 * 60_000),
    location: 'Online',
    group: 'Qur’an Study',
    descHtml: `<p>Weekly tafsir session covering Surah Yasin verses 1–20.</p>`,
    liveUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // placeholder
  };

  copyLink() {
    navigator.clipboard?.writeText(location.href);
    alert('Event link copied.');
  }
}
