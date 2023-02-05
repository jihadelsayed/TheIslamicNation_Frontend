import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArabicComponent } from './arabic/arabic.component';
import { LanguagesComponent } from './languages.component';


//import { ContinentsComponent } from './header/muslims/continents/continents.component';


export const languagesRoutes: Routes = [
  { path:'languages',component: LanguagesComponent },
  { path:'languages/arabic',component: ArabicComponent },
];
