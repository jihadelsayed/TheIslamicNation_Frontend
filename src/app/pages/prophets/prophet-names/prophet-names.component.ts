import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { ProphetNamesServiceService } from './prophet-names-service.service';

@Component({
  selector: 'app-prophet-names',
  templateUrl: './prophet-names.component.html',
  styleUrls: ['./prophet-names.component.scss']
})
export class ProphetNamesComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService,
  private ProphetNamesServiceService: ProphetNamesServiceService
  ) { }

  Names: any[];

  ngOnInit(): void {
    this.ProphetNamesServiceService.getAllNames().subscribe(
      (data: any) => {
        this.Names = data.data
      })
  }
}
