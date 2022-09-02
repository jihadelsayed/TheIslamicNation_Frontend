import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quran } from 'src/Interface/Quran.model';
import { QuranService } from 'src/services/Quran/Quran.service';

@Component({
  selector: 'app-aya',
  templateUrl: './aya.component.html',
  styleUrls: ['./aya.component.css']
})
export class AyaComponent implements OnInit {

  Souwar: Quran[];
  ayatext: Quran[];
  index: number;

  constructor(private QuranService: QuranService, private activeLink: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {

    this.index = this.activeLink.snapshot.params["index"];
    this.QuranService.getAllsura().subscribe((data: Quran[]) => {
      this.Souwar = data;
      this.ayatext = this.Souwar.filter(x => x.index == this.index);
    })

  }
  moveright() {
    if (this.index < 114) {
      ++this.index;
      this.router.navigate(["/souwar/" + this.index])
      window.location.reload();
    }

  }
  moveLeft() {
    if (this.index > 1) {
      --this.index;
      this.router.navigate(["/souwar/" + this.index])
      window.location.reload();

    }

  }


}
