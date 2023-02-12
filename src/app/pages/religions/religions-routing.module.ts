import { Routes } from '@angular/router';
import { AyaComponent } from './religions-books/quran/aya/aya.component';
import { QuranComponent } from './religions-books/quran/quran.component';
import { ReligionsBooksComponent } from './religions-books/religions-books.component';
import { ReligionsComponent } from './religions.component';



export const religionsRoutes: Routes = [
  { path:'religions',component: ReligionsComponent,
   children: [
    { path:'religionsBooks',component: ReligionsBooksComponent },
    { path:'religionsBooks/quran',component: QuranComponent },
    { path:'religionsBooks/quran/chapter/:id',component: AyaComponent },
  ]
},
{ path:'religionsBooks',component: ReligionsBooksComponent ,
  children: [
    { path:'quran',component: QuranComponent },
    { path:'quran/chapter/:id',component: AyaComponent },
  ]
},
];
