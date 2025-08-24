import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-event-card',
  imports: [CommonModule],
  template: `
    <article class="card">
      <h4 class="title">{{ event.title }}</h4>
      <p class="muted">{{ event.startsAt | date:'medium' }} · {{ event.location }}</p>
    </article>
  `,
  styles: [`
    @use 'styles/styles.variables.scss' as *;
    .card{background:var(--card-background);border:1px solid var(--neutral-color-medium-light);border-radius:12px;padding:.9rem}
    .title{color:var(--font-color-primary);margin-bottom:.25rem}
    .muted{color:var(--font-color-tertiary)}
  `]
})
export class EventCardComponent {
  @Input() event!: { id:string; title:string; startsAt:Date; location:string };
}
