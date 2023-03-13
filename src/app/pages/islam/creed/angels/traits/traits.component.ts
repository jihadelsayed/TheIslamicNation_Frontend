import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss']
})
export class TraitsComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
