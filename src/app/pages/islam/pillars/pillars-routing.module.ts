import { Routes } from '@angular/router';

import { PillarsComponent } from './pillars.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { PrayersComponent } from './prayers/prayers.component';
import { CharityComponent } from './charity/charity.component';
import { FastingComponent } from './fasting/fasting.component';
import { PilgrimageComponent } from './pilgrimage/pilgrimage.component';

export const pillarsRoutes: Routes = [
  {
    path: 'pillars', component: PillarsComponent,
    children: [
      {
        path: 'testimony', component: TestimonyComponent,
        children: [

        ]
      },
      {
        path: 'prayers', component: PrayersComponent,
        children: [

        ]
      },
      {
        path: 'charity', component: CharityComponent,
        children: [

        ]
      },
      {
        path: 'fasting', component: FastingComponent,
        children: [

        ]
      },
      {
        path: 'pilgrimage', component: PilgrimageComponent,
        children: [

        ]
      }
    ]
  },
];
