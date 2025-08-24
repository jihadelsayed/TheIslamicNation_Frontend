import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-video-card',
  imports: [CommonModule],
  template: `
    <article class="card">
      <h4 class="title">{{ video.title }}</h4>
      <div class="thumb">
        <iframe width="100%" height="180" [src]="'https://www.youtube.com/embed/' + video.youtubeId"
                title="YouTube video" frameborder="0" allowfullscreen></iframe>
      </div>
    </article>
  `,
  styles: [`
    @use 'styles/styles.variables.scss' as *;
    .card{background:var(--card-background);border:1px solid var(--neutral-color-medium-light);border-radius:12px;padding:.9rem}
    .title{color:var(--font-color-primary);margin-bottom:.5rem}
    .thumb{overflow:hidden;border-radius:8px}
  `]
})
export class VideoCardComponent {
  @Input() video!: { id:string; title:string; youtubeId:string };
}
