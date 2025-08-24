import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

type Notice = { id: string; type: 'comment'|'like'|'follow'|'system'; text: string; time: Date; read: boolean; link?: string };

@Component({
  standalone: true,
  selector: 'app-notifications-panel',
  imports: [CommonModule,RouterModule],
  templateUrl: './notifications-panel.component.html',
  styleUrls: ['./notifications-panel.component.scss'],
})
export class NotificationsPanelComponent {
  items = signal<Notice[]>([
    { id: 'n1', type: 'comment', text: 'Aisha commented on your post', time: new Date(), read: false, link: '/posts/1' },
    { id: 'n2', type: 'follow',  text: 'Omar started following you', time: new Date(), read: true },
    { id: 'n3', type: 'system',  text: 'New version deployed', time: new Date(), read: true },
  ]);

  markAllRead()  { this.items.update(list => list.map(n => ({ ...n, read: true }))); }
  clearRead()    { this.items.update(list => list.filter(n => !n.read)); }
  toggleRead(id: string) {
    this.items.update(list => list.map(n => n.id === id ? ({ ...n, read: !n.read }) : n));
  }
}
