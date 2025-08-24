import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-resource-detail',
  imports: [CommonModule],
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss'],
})
export class ResourceDetailComponent {
  resource = {
    id: 'r1',
    title: 'Introduction to Tajweed',
    kind: 'article',
    author: 'Imam A.',
    tags: ['quran','tajweed'],
    bodyHtml: `<p>This article introduces the rules of tajweed…</p>`,
    link: 'https://example.com',
  };

  copyLink() {
    navigator.clipboard?.writeText(location.href);
    alert('Resource link copied.');
  }
}
