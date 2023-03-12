import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-jurisprudence',
  templateUrl: './jurisprudence.component.html',
  styleUrls: ['./jurisprudence.component.css']
})
export class JurisprudenceComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
