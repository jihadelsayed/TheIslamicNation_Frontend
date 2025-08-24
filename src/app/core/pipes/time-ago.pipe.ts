import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
  pure: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date | string | number | null | undefined): string {
    if (!value) return '';
    const then = new Date(value).getTime();
    const now = Date.now();
    const diff = Math.max(0, now - then);

    const sec  = Math.floor(diff / 1000);
    const min  = Math.floor(sec / 60);
    const hour = Math.floor(min / 60);
    const day  = Math.floor(hour / 24);
    const week = Math.floor(day / 7);
    const mon  = Math.floor(day / 30);
    const yr   = Math.floor(day / 365);

    if (sec < 45) return 'just now';
    if (min < 2) return 'a minute ago';
    if (min < 60) return `${min} minutes ago`;
    if (hour < 2) return 'an hour ago';
    if (hour < 24) return `${hour} hours ago`;
    if (day < 2) return 'yesterday';
    if (day < 7) return `${day} days ago`;
    if (week < 5) return `${week} weeks ago`;
    if (mon < 12) return `${mon} months ago`;
    return `${yr} years ago`;
  }
}
