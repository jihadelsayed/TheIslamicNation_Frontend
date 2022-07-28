import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {

  constructor(private httpClient: HttpClient) { }

  getWorldMap() {
    return this.httpClient.get('./assets/worldMap.json');
  }
}
