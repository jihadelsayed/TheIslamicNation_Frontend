import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-islam-pillars',
  templateUrl: './islam-pillars.component.html',
  styleUrls: ['./islam-pillars.component.css']
})
export class IslamPillarsComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
