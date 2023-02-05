import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { namesComponent } from './names/names.component';
import { TheCreatorComponent } from './the-creator.component';


//import { ContinentsComponent } from './header/muslims/continents/continents.component';


export const theCreatorRoutes: Routes = [
  { path:'theCreator',component: TheCreatorComponent },
  { path:'theCreator/names',component: namesComponent },
];
