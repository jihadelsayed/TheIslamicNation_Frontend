import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-doctrines',
  templateUrl: './doctrines.component.html',
  styleUrls: ['./doctrines.component.css']
})
export class DoctrinesComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
