import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-islam',
  templateUrl: './islam.component.html',
  styleUrls: ['./islam.component.css']
})
export class IslamComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
