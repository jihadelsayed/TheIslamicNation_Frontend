import { NamesComponent } from './names/names.component';
import { CapacityComponent } from './capacity/capacity.component';
import { TraitsComponent } from './traits/traits.component';
import { Routes } from '@angular/router';
import { AngelsComponent } from './angels.component';


export const angelsRoutes: Routes = [
  { path:'angels',component: AngelsComponent,
  children: [
    { path:'',component: NamesComponent},
    { path:'capacity',component: CapacityComponent},
    { path:'traits',component: TraitsComponent},
  ]
},
];
