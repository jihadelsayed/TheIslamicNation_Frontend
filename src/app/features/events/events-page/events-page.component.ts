import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

type EventItem = {
  id: string;
  title: string;
  startsAt: Date;
  endsAt?: Date;
  location: string;
  group?: string;
  cover?: string;
};

@Component({
  standalone: true,
  selector: 'app-events-page',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss'],
})
export class EventsPageComponent {
  q = '';
  when: 'upcoming' | 'past' | 'all' = 'upcoming';

  events: EventItem[] = [
    { id: 'e1', title: 'Tafsir Session', startsAt: new Date(Date.now() + 86_400_000), location: 'Online', group: 'Qur’an Study' },
    { id: 'e2', title: 'Hadith Reading', startsAt: new Date(Date.now() + 3 * 86_400_000), location: 'Masjid Bilal', group: 'Hadith Circle' },
    { id: 'e3', title: 'Community Iftar', startsAt: new Date(Date.now() - 5 * 86_400_000), location: 'Community Hall', group: 'Community' },
  ];

  get filtered() {
    const s = this.q.trim().toLowerCase();
    const now = Date.now();
    return this.events.filter(e => {
      const matchesText =
        !s ||
        e.title.toLowerCase().includes(s) ||
        (e.group || '').toLowerCase().includes(s) ||
        e.location.toLowerCase().includes(s);
      const isUpcoming = (e.startsAt?.getTime() ?? 0) >= now;
      const isPast = !isUpcoming;
      const matchesWhen =
        this.when === 'all' ? true : (this.when === 'upcoming' ? isUpcoming : isPast);
      return matchesText && matchesWhen;
    }).sort((a,b) => (a.startsAt.getTime() - b.startsAt.getTime()));
  }
}
