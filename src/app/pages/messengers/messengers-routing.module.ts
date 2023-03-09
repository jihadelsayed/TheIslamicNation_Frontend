import { Routes } from '@angular/router';
import { MessengerNamesComponent } from './messenger-names/messenger-names.component';
import { MessengersComponent } from './messengers.component';


export const messengersRoutes: Routes = [
  { path:'messengers',component: MessengersComponent,
  children: [
    { path:'',component: MessengerNamesComponent},

  ]
},
];
