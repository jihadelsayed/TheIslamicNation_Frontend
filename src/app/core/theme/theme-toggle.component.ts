import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './theme.service';

@Component({
  selector: 'theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="icon-btn"
            type="button"
            [attr.aria-pressed]="isDark()"
            (click)="cycle()"
            [title]="'Theme: ' + label()">
      <span *ngIf="mode() === 'system'">🖥️</span>
      <span *ngIf="mode() === 'dark'">🌙</span>
      <span *ngIf="mode() === 'light'">☀️</span>
    </button>
  `,
})
export class ThemeToggleComponent {
  mode = signal<'light'|'dark'|'system'>('system');
  isDark = computed(() => {
    const m = this.mode();
    if (m === 'dark') return true;
    if (m === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  label = computed(() => this.mode().toUpperCase());

  constructor(private theme: ThemeService) {
    // initialize signal from service
    this.mode.set(this.theme.getMode());
  }

  cycle() {
    this.theme.toggle();
    this.mode.set(this.theme.getMode());
  }
}
