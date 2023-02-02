import { NamesService } from 'src/services/names/names.service';
import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class namesComponent implements OnInit {
  constructor(private NamesService: NamesService,public styleModeService: StyleModeService) { }
  Names: any[];

  ngOnInit(): void {
    this.NamesService.getAllNames().subscribe(
      (data: any) => {
        console.log(data)
        this.Names = data.data
      })
  }

}
