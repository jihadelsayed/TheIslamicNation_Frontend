import { Routes } from '@angular/router';
import { namesComponent } from './names/names.component';
import { TheCreatorComponent } from './the-creator.component';


export const theCreatorRoutes: Routes = [
  { path:'theCreator',component: TheCreatorComponent,
    children: [
      { path:'',component: namesComponent },
    ]
  }
];
