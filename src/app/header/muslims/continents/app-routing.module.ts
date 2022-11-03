import { IslamPillarsComponent } from './header/islam/islam-pillars/islam-pillars.component';
import { JurisprudencesComponent } from './header/islam/jurisprudences/jurisprudences.component';
import { DoctrinesComponent } from './header/islam/doctrines/doctrines.component';
import { CreedsComponent } from './header/islam/creeds/creeds.component';
import { ProvisionsComponent } from './header/islam/provisions/provisions.component';
import { TheCreatorComponent } from './header/the-creator/the-creator.component';
import { PolicyComponent } from './footer/policy/policy.component';
import { CookiesComponent } from './footer/cookies/cookies.component';
import { FAQComponent } from './footer/faq/faq.component';
import { ContactComponent } from './footer/contact/contact.component';
import { WhyComponent } from './footer/why/why.component';
import { WhatComponent } from './footer/what/what.component';
import { WhoComponent } from './footer/who/who.component';
import { HowComponent } from './footer/how/how.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/services/auth/auth.guard';
import { NotAuthGuard } from 'src/services/auth/not-auth.guard';
import { CreaturesComponent } from './header/creatures/creatures.component';
import { HomeComponent } from './header/home/home.component';
import { ArabicComponent } from './header/languages/arabic/arabic.component';
import { LanguagesComponent } from './header/languages/languages.component';
import { MuslimsComponent } from './header/muslims/muslims.component';
import { IslamComponent } from './header/islam/islam.component';
import { AyaComponent } from './header/religions/religions-books/quran/aya/aya.component';
import { QuranComponent } from './header/religions/religions-books/quran/quran.component';
import { ReligionsBooksComponent } from './header/religions/religions-books/religions-books.component';
import { ReligionsComponent } from './header/religions/religions.component';
import { namesComponent } from './header/the-creator/names/names.component';
//import { routerLink } from './header/muslims/continents/continents.component';
//import { StatesComponent } from './header/muslims/continents/countries/states/states.component';
import { MinistriesComponent } from './header/muslims/ministries/ministries.component';





const routes: Routes = [


  { path:'religions',component: ReligionsComponent },
  { path:'islam',component: IslamComponent },



  //{ path:'continents',component: routerLink },
  //{ path:'continents/countries',component: StatesComponent },
  //{ path:'continents/countries/states',component: StatesComponent },

  // header
  { path:'religionsBooks',component: ReligionsBooksComponent },
  { path:'religionsBooks/quran',component: QuranComponent },
  { path:'religionsBooks/quran/souwar/:index',component: AyaComponent },

  { path:'the_creator',component: TheCreatorComponent },
  { path:'the_creator/names',component: namesComponent },

  { path:'creatures',component: CreaturesComponent },

  { path:'languages',component: LanguagesComponent },
  { path:'languages/arabic',component: ArabicComponent },

  { path:'muslims',component: MuslimsComponent },
  { path:'muslims/ministries',component: MinistriesComponent },

  { path:'islam',component: IslamComponent },
  { path:'islam/provisions',component: ProvisionsComponent }, // الاحكام الشرعية
  { path:'islam/creeds',component: CreedsComponent }, // العقيدة
  { path:'islam/doctrines',component: DoctrinesComponent }, // الاجتهادات
  { path:'islam/jurisprudences',component: JurisprudencesComponent }, // الفقه  يختلف بكل زمان ومكان
  { path:'islam/pillars',component: IslamPillarsComponent }, // أركان الاسلام


  // footer
  { path:'how',component: HowComponent },
  { path:'who',component: WhoComponent },
  { path:'what',component: WhatComponent },
  { path:'why',component: WhyComponent },
  { path:'contact',component: ContactComponent },
  { path:'faq',component: FAQComponent },
  { path:'cookies',component: CookiesComponent },
  { path:'policy',component: PolicyComponent },

  { path:'',component: HomeComponent },

  // { path:'search',component: SearchComponent },




  // { path:'chat',component: ChatComponent ,canActivate:[AuthGuard] },
  // { path:'deleteAccount',component: DeleteAccountComponent ,canActivate:[AuthGuard] },
  // { path:'buyservice/:slug',component: BuyServiceComponent ,canActivate:[AuthGuard] },
  // { path:'viewservice/:slug',component: ViewServiceComponent ,canActivate:[AuthGuard] },
  // { path:'complete',component: CompleteComponent,canActivate:[AuthGuard] },
  // { path:'Profile/:username',component: ProfileComponent,canActivate:[NotAuthGuard]},
  // { path:'addservice',component: AddServiceComponent,canActivate:[AuthGuard]},
  // { path:'editservice/:slug',component: EditServiceComponent ,canActivate:[] },

  // { path:'Profile/:username/profileServices',component: ProfileServicesComponent, canActivate:[AuthGuard] },
  // { path:'aboutUs',component: AboutUsComponent},
  // { path:'cookies',component: CookiesComponent},
  // { path:'policy',component: PolicyComponent},
  // { path:'contact',component: ContactComponent},
  // { path:'donate',component: DonateComponent},
  // { path:'vision',component: OurVisionComponent},
  // { path:'register',component: RegisterComponent, canActivate:[AuthGuard]},
  // { path:'CheckoutSuccess',component: CheckoutSuccessPageComponent, canActivate:[AuthGuard]},
  // { path:'CheckoutUnsuccess',component: CheckoutUnsuccessPageComponent, canActivate:[AuthGuard]},
  // { path:'Approved',component: ApprovedPageComponent, canActivate:[AuthGuard]},
  // { path:'orderDetail',component: OrderDetailComponent, canActivate:[AuthGuard]},

  // { path:'**',component: ErrorPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
