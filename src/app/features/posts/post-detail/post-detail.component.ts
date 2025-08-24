import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from '../../../core/pipes/time-ago.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-post-detail',
  imports: [CommonModule, FormsModule, TimeAgoPipe],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {
  post = {
    id: '1',
    title: 'Friday Reminder',
    author: 'Imam A.',
    time: new Date(Date.now() - 60 * 60 * 1000),
    group: 'Qur’an Study',
    bodyHtml: `<p>Remember to increase dhikr today. <strong>Salawat</strong> and charity.</p>`,
  };

  comments = [
    { id: 'c1', author: 'Fatimah', time: new Date(), html: 'JazakAllahu khair!' },
  ];
}
