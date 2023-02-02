import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-arabic',
  templateUrl: './arabic.component.html',
  styleUrls: ['./arabic.component.css']
})
export class ArabicComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
