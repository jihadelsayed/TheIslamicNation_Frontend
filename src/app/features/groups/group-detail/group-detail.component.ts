import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Tab = 'feed' | 'events' | 'members';

@Component({
  standalone: true,
  selector: 'app-group-detail',
  imports: [CommonModule],
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss'],
})
export class GroupDetailComponent {
  tab = signal<Tab>('feed');

  group = {
    name: 'Qur’an Study',
    members: 482,
    desc: 'Weekly tafsir readings and reflections.',
    banner: '',
  };

  posts = [
    { id: 'p1', title: 'This week: Surah Yasin 1–20', author: 'Imam A.', time: new Date(), excerpt: 'Bring notes.' },
  ];

  events = [
    { id: 'e1', title: 'Live Tafsir', when: new Date(Date.now() + 86400000), location: 'Online' },
  ];

  members = [
    { id: 'u1', name: 'Aisha' }, { id: 'u2', name: 'Umar' }, { id: 'u3', name: 'Fatimah' }
  ];
}
