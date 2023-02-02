import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-card-muslim',
  templateUrl: './card-muslim.component.html',
  styleUrls: ['./card-muslim.component.css']
})
export class CardMuslimComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
