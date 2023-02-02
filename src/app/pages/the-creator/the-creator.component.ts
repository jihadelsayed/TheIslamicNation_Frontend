import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-the-creator',
  templateUrl: './the-creator.component.html',
  styleUrls: ['./the-creator.component.css']
})
export class TheCreatorComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
