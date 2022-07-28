import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class QuranService {

  constructor(private httpClient: HttpClient) { }

  getAllsura() {
    return this.httpClient.get('./assets/quran.json');
  }

}
