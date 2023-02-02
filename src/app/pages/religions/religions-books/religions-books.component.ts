import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-religions-books',
  templateUrl: './religions-books.component.html',
  styleUrls: ['./religions-books.component.css']
})
export class ReligionsBooksComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
