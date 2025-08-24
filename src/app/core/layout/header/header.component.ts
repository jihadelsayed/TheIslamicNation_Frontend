import {
  Component, EventEmitter, Output, signal, HostBinding,
  Inject, OnInit, OnDestroy, PLATFORM_ID, Renderer2
} from '@angular/core';
import { isPlatformBrowser, DOCUMENT, CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ThemeService } from '@/core/theme/theme.service';
import { ThemeToggleComponent } from '@/core/theme/theme-toggle.component';
import { SearchBarComponent } from '@/features/search/search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, ThemeToggleComponent, SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSidenav = new EventEmitter<void>();

  mobileOpen = signal(false);
  @HostBinding('class.scrolled') scrolled = false;

  private isBrowser: boolean;
  private unlistenScroll?: () => void;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private theme: ThemeService,
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;
    this.unlistenScroll = this.renderer.listen('window', 'scroll', () => {
      const y = window.scrollY || this.document.documentElement.scrollTop || 0;
      this.scrolled = y > 4;
    });
  }

  ngOnDestroy(): void { this.unlistenScroll?.(); }

  toggleMobile() { this.mobileOpen.update(v => !v); }
  closeMobile() { this.mobileOpen.set(false); }

  toggleTheme() { if (this.isBrowser) this.theme.toggle(); }
  goHome() { this.router.navigateByUrl('/'); }
}
