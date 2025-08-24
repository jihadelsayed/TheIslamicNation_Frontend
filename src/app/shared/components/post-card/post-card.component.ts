import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from '@/core/pipes/time-ago.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, FormsModule, TimeAgoPipe],
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() post!: { id: string; title: string; excerpt: string; author: string; time: Date };
}
