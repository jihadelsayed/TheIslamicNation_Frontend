import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { Location } from './location.model'; // Assuming you have a Location model
interface Location {
  name: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private selectedLocationSubject = new BehaviorSubject<Location | null>(null);

  setSelectedLocation(location: Location): void {
    this.selectedLocationSubject.next(location);
  }

  getSelectedLocation(): Observable<Location | null> {
    return this.selectedLocationSubject.asObservable();
  }
}
