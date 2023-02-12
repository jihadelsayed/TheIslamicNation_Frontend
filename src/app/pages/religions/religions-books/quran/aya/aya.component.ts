import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { Quran } from 'src/Interface/Quran.model';
import { QuranService } from 'src/services/Quran/Quran.service';

@Component({
  selector: 'app-aya',
  templateUrl: './aya.component.html',
  styleUrls: ['./aya.component.css']
})
export class AyaComponent implements OnInit {

  chapter: any;
  id: number;

  constructor(private QuranService: QuranService, private activeLink: ActivatedRoute,
    public router: Router, public styleModeService: StyleModeService) { }

  ngOnInit() {
    this.id = this.activeLink.snapshot.params["id"];
    this.getChapter();


  }
  moveRight() {
    if (this.id < 114) {
      this.id--;
      this.router.navigate(["religionsBooks/quran/chapter/" + this.id]).then(() => {
        this.getChapter();
      });
        }

  }
  moveLeft() {
    if (this.id > 1) {
      this.id++;
      this.router.navigate(["religionsBooks/quran/chapter/" + this.id]).then(() => {
        this.getChapter();
      });

    }
  }
  getChapter() {
    this.QuranService.getChapter(this.id).subscribe((data: any) => {
      console.log(data);
      this.chapter = data;
    });
  }


}
