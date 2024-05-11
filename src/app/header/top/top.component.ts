

import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { Component } from '@angular/core';
import { LanguagesComponent } from './languages/languages.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';


@Component({
  selector: 'app-top',
  standalone: true,
  imports: [CommonModule, LocationsComponent, LanguagesComponent, DarkModeComponent],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss'
})
export class TopComponent {

}
