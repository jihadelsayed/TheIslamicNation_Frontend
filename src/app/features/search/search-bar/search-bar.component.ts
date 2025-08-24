import {
  Component, EventEmitter, Input, Output, signal,
  ViewChild, ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../../../core/services/search.service';

export type Suggestion =
  | { kind: 'group'; label: string; slug: string }
  | { kind: 'user';  label: string; handle: string }
  | { kind: 'post';  label: string; id: string };

@Component({
  standalone: true,
  selector: 'app-search-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() inline = false;
  @Output() submitted = new EventEmitter<string>();

  @ViewChild('box', { static: true }) box!: ElementRef<HTMLInputElement>;

  q = signal('');
  focused = signal(false);
  suggestions = signal<Suggestion[]>([]);

  constructor(private search: SearchService, private router: Router) {}

  handleInput() {
    const value = this.box?.nativeElement.value ?? '';
    this.q.set(value);
    this.suggestions.set(value.trim() ? this.search.suggest(value) : []);
  }

  closePanel() { this.suggestions.set([]); }

  onSubmit() {
    const value = this.q().trim();
    if (!value) return;
    this.submitted.emit(value);
    this.router.navigate(['/search'], { queryParams: { q: value } });
    this.closePanel();
  }

  select(s: Suggestion) {
    if (s.kind === 'group') this.router.navigate(['/groups', s.slug]);
    else if (s.kind === 'user') this.router.navigate(['/profile', s.handle]);
    else this.router.navigate(['/posts', s.id]);
    this.closePanel();
  }
}
