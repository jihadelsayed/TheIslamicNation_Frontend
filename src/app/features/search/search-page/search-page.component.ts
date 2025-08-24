import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostCardComponent } from '../../../shared/components/post-card/post-card.component';

type Tab = 'all' | 'posts' | 'groups' | 'qa' | 'events';

@Component({
  standalone: true,
  selector: 'app-search-page',
  imports: [CommonModule, FormsModule, PostCardComponent],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  q = '';
  tab: Tab = 'all';

  mock = {
    posts: [] as Array<{ id: string; title: string; excerpt: string; author: string; time: Date }>,
    groups: [] as Array<{ id: string; name: string; members: number; desc: string }>,
    qa: [] as Array<{ id: string; title: string; answers: number }>,
    events: [] as Array<{ id: string; title: string; startsAt: Date; location: string }>,
  };

  constructor() {
    // read ?q= from URL and auto-run a UI-only search
    this.route.queryParamMap.subscribe((params) => {
      const q = (params.get('q') || '').trim();
      if (q && q !== this.q) {
        this.q = q;
        this.doSearch();
      }
    });
  }

  setTab(t: Tab) { this.tab = t; }

  doSearch() {
    const term = this.q.trim();
    if (!term) {
      this.clearResults();
      this.tab = 'all';
      // keep URL clean
      this.router.navigate([], { queryParams: { q: null }, queryParamsHandling: 'merge' });
      return;
    }

    // ---- UI-only mock results (replace with SearchService later) ----
    this.mock.posts = [
      { id: 'p1', title: `Post about ${term}`, excerpt: 'Preview…', author: 'Aisha', time: new Date() },
      { id: 'p2', title: `${term} in the Sunnah`, excerpt: 'Short summary…', author: 'Umar', time: new Date() },
    ];
    this.mock.groups = [
      { id: 'g1', name: `${term} Study Group`, members: 128, desc: 'Weekly readings and discussion.' },
    ];
    this.mock.qa = [
      { id: 'q1', title: `What is the ruling on ${term}?`, answers: 3 },
    ];
    this.mock.events = [
      { id: 'e1', title: `${term} Lecture`, startsAt: new Date(Date.now() + 86_400_000), location: 'Online' },
    ];

    // default focus
    this.tab = 'posts';

    // sync URL
    this.router.navigate([], { queryParams: { q: term }, queryParamsHandling: 'merge' });
  }

  private clearResults() {
    this.mock.posts = [];
    this.mock.groups = [];
    this.mock.qa = [];
    this.mock.events = [];
  }
}
