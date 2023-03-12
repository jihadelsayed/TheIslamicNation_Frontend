import { Routes } from '@angular/router';
import { MinistriesComponent } from './ministries/ministries.component';
import { MuslimsComponent } from './muslims.component';


export const muslimsRoutes: Routes = [
  { path:'muslims',component: MuslimsComponent,
  children: [
    { path:'',component: MinistriesComponent },

  ]
},
];
