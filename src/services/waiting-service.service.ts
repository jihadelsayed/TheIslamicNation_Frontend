import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Injectable({
  providedIn: 'root'
})
export class WaitingServiceService {
  private count = 0;
  private spinner$ = new BehaviorSubject<string>('');

  constructor(public styleModeService: StyleModeService) { }

  getSpinnerObserver(): Observable<string>{
    return this.spinner$.asObservable();
  }

  requestStarted(){
    if(++this.count == 1){
      this.spinner$.next('start')
    }
  }
  requestEnded(){
    if(this.count === 0 || --this.count === 0){
      this.spinner$.next('stop')
    }
  }
  resetWait(){
    this.count = 0
    this.spinner$.next('stop')
  }
}
