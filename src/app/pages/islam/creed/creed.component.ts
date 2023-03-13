import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { CreedService } from './creed.service';

@Component({
  selector: 'app-creed',
  templateUrl: './creed.component.html',
  styleUrls: ['./creed.component.css']
})
export class CreedComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService, public CreedService: CreedService ) { }
  Creed: any[];

  ngOnInit(): void {
    this.CreedService.getCreed().subscribe(
      (data: any) => {
        console.log(data.data)
        this.Creed = data.data
      })
  }

}
