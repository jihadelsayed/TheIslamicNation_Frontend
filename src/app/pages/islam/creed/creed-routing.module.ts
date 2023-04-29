import { CreedComponent } from './creed.component';
import { Routes } from '@angular/router';
import { AngelsComponent } from './angels/angels.component';
import { CapacityComponent } from './angels/capacity/capacity.component';
import { NamesComponent } from './angels/names/names.component';
import { TraitsComponent } from './angels/traits/traits.component';
import { ProphetsComponent } from './prophets/prophets.component';
import { ProphetNamesComponent } from './prophets/prophet-names/prophet-names.component';
import { AyaComponent } from './religions-books/quran/aya/aya.component';
import { QuranComponent } from './religions-books/quran/quran.component';
import { ReligionsBooksComponent } from './religions-books/religions-books.component';
import { TheCreatorComponent } from './the-creator/the-creator.component';
import { namesComponent } from './the-creator/names/names.component';
import { ContentComponent } from 'src/app/header/menu/pages/content/content.component';
import { SubMenuComponent } from 'src/app/header/menu/pages/sub-menu/sub-menu.component';
import { AsideComponent } from 'src/app/header/aside/aside.component';

export const creedRoutes: Routes = [
  {
    path: ':menuUrl', component: CreedComponent,
    children: [
      // {
      //   path: 'angels', component: AngelsComponent,
      //   children: [
      //     { path: '', component: NamesComponent },
      //     { path: 'capacity', component: CapacityComponent },
      //     { path: 'traits', component: TraitsComponent },
      //   ]
      // },
      // {
      //   path: 'prophets', component: ProphetsComponent,
      //   children: [
      //     { path: '', component: ProphetNamesComponent },

      //   ]
      // },
      // {
      //   path: 'religionsBooks', component: ReligionsBooksComponent,
      //   children: [
      //     { path: 'quran', component: QuranComponent },
      //     { path: 'quran/chapter/:id', component: AyaComponent },
      //   ]
      // },
      // {
      //   path: 'theCreator', component: TheCreatorComponent,
      //   children: [
      //     { path: '', component: namesComponent },
      //   ]
      // },
      // {
      //   path: 'destiny', component: TheCreatorComponent,
      //   children: [
      //     { path: '', component: namesComponent },
      //   ]
      // },
      // {
      //   path: 'judgmentDay', component: TheCreatorComponent,
      //   children: [
      //     { path: '', component: namesComponent },
      //   ]
      // },
      {
        path: ':asideUrl', component: AsideComponent,
        children: [
          { path: ':contentUrl', component: ContentComponent },
        ]
      }
    ]
  },
];
