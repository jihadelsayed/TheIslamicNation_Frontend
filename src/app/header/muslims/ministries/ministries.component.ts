import { Component, OnInit } from '@angular/core';
import { caliph, minsters, primeMinister } from 'src/data/pyramid';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.component.html',
  styleUrls: ['./ministries.component.css']
})
export class MinistriesComponent implements OnInit {

  constructor() { }

  caliph: any[] = caliph;
  primeMinister: any[] = primeMinister;
  minsters: any[] = minsters;
  ngOnInit(): void {
  }

}
