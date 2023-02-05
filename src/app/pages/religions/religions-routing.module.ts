import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AyaComponent } from './religions-books/quran/aya/aya.component';
import { QuranComponent } from './religions-books/quran/quran.component';
import { ReligionsBooksComponent } from './religions-books/religions-books.component';
import { ReligionsComponent } from './religions.component';


//import { ContinentsComponent } from './header/muslims/continents/continents.component';


export const religionsRoutes: Routes = [
  { path:'religions',component: ReligionsComponent,
   children: [
    { path:'religionsBooks',component: ReligionsBooksComponent },
    { path:'religionsBooks/quran',component: QuranComponent },
    { path:'religionsBooks/quran/souwar/:index',component: AyaComponent },
  ]
},

];
