import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-detail-muslim',
  templateUrl: './detail-muslim.component.html',
  styleUrls: ['./detail-muslim.component.css']
})
export class DetailMuslimComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
