import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { MessengerNamesServiceService } from './messenger-names-service.service';

@Component({
  selector: 'app-messenger-names',
  templateUrl: './messenger-names.component.html',
  styleUrls: ['./messenger-names.component.scss']
})
export class MessengerNamesComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService,
  private MessengerNamesServiceService: MessengerNamesServiceService
  ) { }

  Names: any[];

  ngOnInit(): void {
    this.MessengerNamesServiceService.getAllNames().subscribe(
      (data: any) => {
        this.Names = data.data
      })
  }
}
