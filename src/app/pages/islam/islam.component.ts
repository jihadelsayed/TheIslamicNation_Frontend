import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { IslamService } from './islam.service';

@Component({
  selector: 'app-islam',
  templateUrl: './islam.component.html',
  styleUrls: ['./islam.component.css']
})
export class IslamComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService,
  private IslamService: IslamService) { }

  Islam: any[];

  ngOnInit(): void {
    this.IslamService.getIslam().subscribe(
      (data: any) => {
        this.Islam = data.data
      })
  }
}
