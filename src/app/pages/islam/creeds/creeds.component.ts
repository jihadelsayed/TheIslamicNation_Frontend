import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-creeds',
  templateUrl: './creeds.component.html',
  styleUrls: ['./creeds.component.css']
})
export class CreedsComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
