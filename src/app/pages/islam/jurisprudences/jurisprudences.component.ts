import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-jurisprudences',
  templateUrl: './jurisprudences.component.html',
  styleUrls: ['./jurisprudences.component.css']
})
export class JurisprudencesComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
