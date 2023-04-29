import { MuslimsComponent } from './muslims/muslims.component';
import { Routes } from '@angular/router';
import { CreedComponent } from './creed/creed.component';
import { PillarsComponent } from './pillars/pillars.component';
import { IslamComponent } from './islam.component';
import { JurisprudenceComponent } from './jurisprudence/jurisprudence.component';
import { ProvisionsComponent } from './provisions/provisions.component';
import { RhetoricComponent } from './rhetoric/rhetoric.component';

export const islamRoutes: Routes = [
  { path:'islam', component: IslamComponent},
  { path:'creed',component: CreedComponent }, // العقيدة
  { path:'pillars',component: PillarsComponent }, // أركان الاسلام
  { path:'provisions',component: ProvisionsComponent }, // الاحكام الشرعية
  { path:'jurisprudence',component: JurisprudenceComponent }, // الفقه  يختلف بكل زمان ومكان
  { path:'muslim',component: MuslimsComponent }, // الفقه  يختلف بكل زمان ومكان
  { path:'rhetoric',component: RhetoricComponent }, // علم البلاغة
];
