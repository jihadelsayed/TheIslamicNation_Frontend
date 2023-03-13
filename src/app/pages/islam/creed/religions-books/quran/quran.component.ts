import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { Quran } from 'src/Interface/Quran.model';
import { QuranService } from 'src/services/Quran/Quran.service';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.css']
})
export class QuranComponent implements OnInit {

  constructor(private QueranService: QuranService, public styleModeService: StyleModeService) { }
  chapters: any;

  ngOnInit(): void {
    this.QueranService.getChapters().subscribe(
      (data: any) => {
        console.log(data)
        this.chapters = data
      })
  }

}
