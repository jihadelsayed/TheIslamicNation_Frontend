import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-angels',
  templateUrl: './angels.component.html',
  styleUrls: ['./angels.component.scss']
})
export class AngelsComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
