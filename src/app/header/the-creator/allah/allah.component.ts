import { NamesOfAllahService } from 'src/services/allah/names-of-allah.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allah',
  templateUrl: './allah.component.html',
  styleUrls: ['./allah.component.css']
})
export class AllahComponent implements OnInit {
  constructor(private NamesOfAllahService: NamesOfAllahService) { }
  Names: any[];

  ngOnInit(): void {
    this.NamesOfAllahService.getAllNames().subscribe(
      (data: any) => {
        console.log(data)
        this.Names = data.data
      })
  }

}
