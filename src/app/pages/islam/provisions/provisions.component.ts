import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-provisions',
  templateUrl: './provisions.component.html',
  styleUrls: ['./provisions.component.css']
})
export class ProvisionsComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
