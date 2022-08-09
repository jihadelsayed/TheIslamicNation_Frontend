import { Component, OnInit } from '@angular/core';
import { Quran } from 'src/Interface/Quran.model';
import { QuranService } from 'src/services/Quran/Quran.service';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.css']
})
export class QuranComponent implements OnInit {

  constructor(private QueranService: QuranService) { }
  Souwar: Quran[];

  ngOnInit(): void {
    this.QueranService.getAllsura().subscribe(
      (data: any) => {
        console.log(data)
        this.Souwar = data
      })
  }

}
