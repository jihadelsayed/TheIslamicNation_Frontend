import { Routes } from '@angular/router';
import { CreedsComponent } from './creeds/creeds.component';
import { DoctrinesComponent } from './doctrines/doctrines.component';
import { IslamPillarsComponent } from './islam-pillars/islam-pillars.component';
import { IslamComponent } from './islam.component';
import { JurisprudencesComponent } from './jurisprudences/jurisprudences.component';
import { ProvisionsComponent } from './provisions/provisions.component';

export const islamRoutes: Routes = [
  { path:'islam', component: IslamComponent,
  children: [
    { path:'provisions',component: ProvisionsComponent }, // الاحكام الشرعية
    { path:'creeds',component: CreedsComponent }, // العقيدة
    { path:'doctrines',component: DoctrinesComponent }, // الاجتهادات
    { path:'jurisprudences',component: JurisprudencesComponent }, // الفقه  يختلف بكل زمان ومكان
    { path:'pillars',component: IslamPillarsComponent }, // أركان الاسلام
  ]
 },

];
