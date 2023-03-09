import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-messengers',
  templateUrl: './messengers.component.html',
  styleUrls: ['./messengers.component.scss']
})
export class MessengersComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
