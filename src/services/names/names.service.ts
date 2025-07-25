import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(@Inject(LOCALE_ID) public localeId: string, private httpClient: HttpClient) { }
  currentLang = this.localeId || 'en'; // or 'ar'
  getAllNames() {
    //return this.httpClient.get('./assets/Names_Of_names_EN.json');
    return this.httpClient.get('https://raw.githubusercontent.com/KabDeveloper/99-Names-Of-Allah/main/99_Names_Of_Allah.json');
  }
}
