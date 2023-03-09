import { Routes } from '@angular/router';
import { ProphetNamesComponent } from './prophet-names/prophet-names.component';
import { ProphetsComponent } from './prophets.component';


export const prophetsRoutes: Routes = [
  { path:'prophets',component: ProphetsComponent,
  children: [
    { path:'',component: ProphetNamesComponent},

  ]
},
];
