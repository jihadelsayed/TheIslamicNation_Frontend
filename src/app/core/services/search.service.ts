import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    suggest(q: string) {
    const k = q.toLowerCase();
    const pool = [
      { kind: 'group', label: 'Qur’an Study', slug: 'quran-study' },
      { kind: 'group', label: 'Hadith Circle', slug: 'hadith-circle' },
      { kind: 'user',  label: 'Neetechs',     handle: 'neetechs' },
      { kind: 'user',  label: 'Sayed Jihad',  handle: 'sayed' },
      { kind: 'post',  label: 'Friday Reminder', id: '1' },
    ] as const;
    return pool.filter((x: any) => x.label.toLowerCase().includes(k)).slice(0, 6);
  }
}
