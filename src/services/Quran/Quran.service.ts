import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class QuranService {
  language = window.navigator.language.slice(0, 2)

  constructor(private httpClient: HttpClient) { }

  getAllsura() {
    return this.httpClient.get('https://theislamicnations3.s3.eu-north-1.amazonaws.com/quran.json');
  }
  getChapters() {
    if (this.language === 'ar') {
      return this.httpClient.get('https://cdn.jsdelivr.net/npm/quran-json/dist/chapters/index.json');
    }else{
      return this.httpClient.get('https://cdn.jsdelivr.net/npm/quran-json/dist/chapters/'+this.language+'/index.json');
    }
  }
  getChapter(id) {
    if (this.language === 'ar') {
      return this.httpClient.get('https://cdn.jsdelivr.net/npm/quran-json/dist/chapters/'+id+'.json');
    }else{
      return this.httpClient.get('https://cdn.jsdelivr.net/npm/quran-json/dist/chapters/'+this.language+'/'+id+'.json');
    }
  }
  getVerses(id) {
    return this.httpClient.get('https://cdn.jsdelivr.net/npm/quran-json/dist/verses/'+id+'.json');

  }
}
