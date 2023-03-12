import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArabicComponent } from './arabic/arabic.component';
import { RhetoricComponent } from './rhetoric.component';


//import { ContinentsComponent } from './header/muslims/continents/continents.component';


export const rhetoricRoutes: Routes = [
  {
    path: 'rhetoric', component: RhetoricComponent,
    children: [
      { path: 'arabic', component: ArabicComponent },
    ]
  }
];
