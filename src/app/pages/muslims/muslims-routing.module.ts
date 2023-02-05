import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinistriesComponent } from './ministries/ministries.component';
import { MuslimsComponent } from './muslims.component';


//import { ContinentsComponent } from './header/muslims/continents/continents.component';


export const muslimsRoutes: Routes = [
  { path:'muslims',component: MuslimsComponent,
  children: [
    { path:'',component: MinistriesComponent },

  ]
},
];
