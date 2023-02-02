import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { caliph, minsters, primeMinister } from 'src/data/pyramid';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.component.html',
  styleUrls: ['./ministries.component.css']
})
export class MinistriesComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  caliph: any[] = caliph;
  primeMinister: any[] = primeMinister;
  minsters: any[] = minsters;
  ngOnInit(): void {
  }

}
