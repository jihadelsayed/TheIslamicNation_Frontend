import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-religions',
  templateUrl: './religions.component.html',
  styleUrls: ['./religions.component.css']
})
export class ReligionsComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
