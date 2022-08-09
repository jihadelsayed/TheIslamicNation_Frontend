import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesOfAllahService {

  constructor(private httpClient: HttpClient) { }

  getAllNames() {
    return this.httpClient.get('./assets/Names_Of_Allah_EN.json');
  }
}
