import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { Language } from './language.model'; // Assuming you have a Language model
interface Language {
  name: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private selectedLanguageSubject = new BehaviorSubject<Language | null>(null);

  setSelectedLanguage(language: Language): void {
    this.selectedLanguageSubject.next(language);
  }

  getSelectedLanguage(): Observable<Language | null> {
    return this.selectedLanguageSubject.asObservable();
  }
}
