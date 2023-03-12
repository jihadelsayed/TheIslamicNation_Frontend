import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { caliph, primeMinister, minsters } from 'src/data/pyramid';
import { MuslimService } from './muslim.service';

@Component({
  selector: 'app-muslims',
  templateUrl: './muslims.component.html',
  styleUrls: ['./muslims.component.css']
})
export class MuslimsComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService,
  private MuslimService: MuslimService) { }

  caliph: any[] = caliph;
  primeMinister: any[] = primeMinister;
  minsters: any[] = minsters;




  Muslims: any[];

  ngOnInit(): void {
    this.MuslimService.getMuslim().subscribe(
      (data: any) => {
        console.log(data.data)

        this.Muslims = data.data
      })
  }

}
