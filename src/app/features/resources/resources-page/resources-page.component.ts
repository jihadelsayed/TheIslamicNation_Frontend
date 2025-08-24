import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

type Resource = { id: string; title: string; kind: 'article'|'pdf'|'video'|'book'; author?: string; tags: string[]; desc: string };

@Component({
  standalone: true,
  selector: 'app-resources-page',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.scss'],
})
export class ResourcesPageComponent {
  q = '';
  kind: 'all'|'article'|'pdf'|'video'|'book' = 'all';

  items: Resource[] = [
    { id: 'r1', title: 'Introduction to Tajweed', kind: 'article', author: 'Imam A.', tags: ['quran', 'tajweed'], desc: 'Basics of pronunciation.' },
    { id: 'r2', title: 'Seerah PDF (Concise)', kind: 'pdf', author: 'Dr. B', tags: ['seerah'], desc: 'Portable reference.' },
    { id: 'r3', title: 'Hadith Science Video', kind: 'video', tags: ['hadith'], desc: 'Overview and terminology.' },
  ];

  get filtered() {
    const s = this.q.trim().toLowerCase();
    return this.items.filter(i => {
      const matchKind = this.kind === 'all' ? true : i.kind === this.kind;
      const matchText = !s || i.title.toLowerCase().includes(s) || i.desc.toLowerCase().includes(s) || i.tags.some(t => t.includes(s));
      return matchKind && matchText;
    });
  }
}
