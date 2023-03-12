import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreaturesComponent } from './creatures.component';



export const creaturesRoutes: Routes = [
  { path:'creatures',component: CreaturesComponent,
  children: [

  ]
  },

];
