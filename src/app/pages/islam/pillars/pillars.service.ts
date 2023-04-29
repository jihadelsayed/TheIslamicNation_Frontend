import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PillarsService {


  constructor(@Inject(LOCALE_ID) public localeId: string, private httpClient: HttpClient) { }
  currentLang = this.localeId || 'en'; // or 'ar'

  getPillars() {
    //return this.httpClient.get('./assets/Names_Of_names_EN.json');
    return this.httpClient.get('https://raw.githubusercontent.com/jihadelsayed/TheIslamicNation/main/json/islam/pillars/pillars.'+this.currentLang+'.json');
  }
}

