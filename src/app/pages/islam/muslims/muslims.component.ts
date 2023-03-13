import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { caliph, primeMinister, minsters } from 'src/data/pyramid';
import { MuslimsService } from './muslims.service';

@Component({
  selector: 'app-muslims',
  templateUrl: './muslims.component.html',
  styleUrls: ['./muslims.component.css']
})
export class MuslimsComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService,
  private muslimsService: MuslimsService) { }

  caliph: any[] = caliph;
  primeMinister: any[] = primeMinister;
  minsters: any[] = minsters;




  muslims: any[];

  ngOnInit(): void {
    this.muslimsService.getMuslim().subscribe(
      (data: any) => {
        console.log(data.data)

        this.muslims = data.data
      })
  }

}
