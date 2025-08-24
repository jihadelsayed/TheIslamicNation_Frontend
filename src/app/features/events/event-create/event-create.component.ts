import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type EventModel = {
  title: string;
  group: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  liveUrl: string;
  description: string;
};

@Component({
  standalone: true,
  selector: 'app-event-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss'],
})
export class EventCreateComponent {
  groups = [
    { slug: 'quran-study', name: 'Qur’an Study' },
    { slug: 'hadith-circle', name: 'Hadith Circle' },
  ];

  model = signal<EventModel>({
    title: '',
    group: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    liveUrl: '',
    description: '',
  });

  // helper to update a single field (no arrow funcs in template)
  update<K extends keyof EventModel>(key: K, value: EventModel[K]) {
    this.model.update(m => ({ ...m, [key]: value }));
  }

  submit() {
    const m = this.model();
    const startsAt = m.date && m.startTime ? new Date(`${m.date}T${m.startTime}`) : null;
    const endsAt   = m.date && m.endTime   ? new Date(`${m.date}T${m.endTime}`)   : null;
    alert(`Create event:\n${JSON.stringify({ ...m, startsAt, endsAt }, null, 2)}`);
  }
}
