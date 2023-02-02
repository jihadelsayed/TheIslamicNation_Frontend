import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { caliph, primeMinister, minsters } from 'src/data/pyramid';

@Component({
  selector: 'app-muslims',
  templateUrl: './muslims.component.html',
  styleUrls: ['./muslims.component.css']
})
export class MuslimsComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  caliph: any[] = caliph;
  primeMinister: any[] = primeMinister;
  minsters: any[] = minsters;

  ngOnInit(): void {
  }

}
