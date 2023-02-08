import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(private httpClient: HttpClient) { }

  getAllNames() {
    //return this.httpClient.get('./assets/Names_Of_names_EN.json');
    return this.httpClient.get('https://raw.githubusercontent.com/KabDeveloper/99-Names-Of-Allah/main/99_Names_Of_Allah.json');
  }
}
