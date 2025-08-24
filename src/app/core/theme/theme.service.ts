// src/app/core/theme/theme.service.ts
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

type ThemeMode = 'light' | 'dark' | 'system';
const THEME_KEY = 'tin_theme'; // theislamicnation theme

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private mode: ThemeMode = 'system';
  private isBrowser: boolean;
  readonly isDark = signal(false);
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  init(): void {
    if (!this.isBrowser) return;

    const saved = (localStorage.getItem(THEME_KEY) as ThemeMode) || 'system';
    this.setMode(saved, /*persist*/ false);

    // React to OS changes if in system mode
    try {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const onChange = () => {
        if (this.mode === 'system') this.applyCurrent();
      };
      mq.addEventListener?.('change', onChange);
      // Optional: keep a reference if you plan to remove listener later.
    } catch { /* ignore */ }
  }

  getMode(): ThemeMode {
    return this.mode;
  }

  setMode(mode: ThemeMode, persist = true): void {
    this.mode = mode;
    if (!this.isBrowser) return;

    if (persist) {
      try { localStorage.setItem(THEME_KEY, mode); } catch { /* ignore */ }
    }
    this.applyCurrent();
  }

  toggle(): void {
    const next: Record<ThemeMode, ThemeMode> = { system: 'dark', dark: 'light', light: 'system' };
    this.setMode(next[this.mode]);
  }

  // ----- internals -----

  private applyCurrent(): void {
    if (!this.isBrowser) return;
    const dark = this.mode === 'dark' || (this.mode === 'system' && this.prefersDark());
    const root = this.document?.documentElement;
    if (!root) return;
    root.classList.toggle('dark-theme', dark);
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    this.isDark.set(dark); // <- update signal for templates
  }


  private prefersDark(): boolean {
    if (!this.isBrowser) return false;
    try { return !!window.matchMedia?.('(prefers-color-scheme: dark)').matches; }
    catch { return false; }
  }
}
