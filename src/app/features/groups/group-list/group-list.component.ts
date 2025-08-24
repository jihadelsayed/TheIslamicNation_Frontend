import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

type Group = { id: string; slug: string; name: string; members: number; desc: string; cover?: string; };

@Component({
  standalone: true,
  selector: 'app-group-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent {
  q = '';
  groups: Group[] = [
    { id: 'g1', slug: 'quran-study', name: 'Qur’an Study', members: 482, desc: 'Weekly tafsir readings.' },
    { id: 'g2', slug: 'hadith-circle', name: 'Hadith Circle', members: 331, desc: '40 Nawawi + commentary.' },
    { id: 'g3', slug: 'islamic-history', name: 'Islamic History', members: 205, desc: 'From Seerah onward.' },
  ];

  get filtered() {
    const s = this.q.trim().toLowerCase();
    if (!s) return this.groups;
    return this.groups.filter(g => g.name.toLowerCase().includes(s) || g.desc.toLowerCase().includes(s));
  }
}
