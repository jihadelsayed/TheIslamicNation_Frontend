import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private showShopHeaderSubject = new BehaviorSubject<boolean>(false);
  readonly showShopHeader$ = this.showShopHeaderSubject.asObservable();

  constructor(private router: Router) {
    this.showShopHeaderSubject.next(this.router.url.includes('/shop'));
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      const url = (event as NavigationEnd).urlAfterRedirects;
      this.showShopHeaderSubject.next(url.includes('/shop'));
    });
  }
}
