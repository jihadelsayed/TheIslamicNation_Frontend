import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { AngleNamesServiceService } from './angle-names-service.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.scss']
})
export class NamesComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService,
  private AngleNamesService: AngleNamesServiceService
  ) { }

  Names: any[];

  ngOnInit(): void {
    this.AngleNamesService.getAllNames().subscribe(
      (data: any) => {
        console.log(data.data)
        this.Names = data.data
      })
  }
}
