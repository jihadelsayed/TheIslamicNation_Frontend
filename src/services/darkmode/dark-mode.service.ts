import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  private isDarkMode: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedDarkMode = localStorage.getItem('darkMode');
      this.isDarkMode = savedDarkMode ? JSON.parse(savedDarkMode) : false;
      this.updateDarkMode(this.isDarkMode);
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateDarkMode(this.isDarkMode);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
    }
  }

  private updateDarkMode(isDarkMode: boolean): void {
    if (isPlatformBrowser(this.platformId)) {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
    this.isDarkModeSubject.next(isDarkMode);
  }

  getDarkMode(): boolean {
    return this.isDarkMode;
  }
}
