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
import { CreaturesComponent } from './pages/creatures/creatures.component';
import { HomeComponent } from './pages/home/home.component';
//import { ContinentsComponent } from './header/muslims/continents/continents.component';

import { NotAuthGuard } from './authorization/services/not-auth.guard';
import { AuthGuard } from './authorization/services/auth.guard';
import { CreedsComponent } from './pages/islam/creeds/creeds.component';
import { DoctrinesComponent } from './pages/islam/doctrines/doctrines.component';
import { IslamPillarsComponent } from './pages/islam/islam-pillars/islam-pillars.component';
import { IslamComponent } from './pages/islam/islam.component';
import { ProvisionsComponent } from './pages/islam/provisions/provisions.component';
import { ArabicComponent } from './pages/languages/arabic/arabic.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { MinistriesComponent } from './pages/muslims/ministries/ministries.component';
import { MuslimsComponent } from './pages/muslims/muslims.component';
import { AyaComponent } from './pages/religions/religions-books/quran/aya/aya.component';
import { QuranComponent } from './pages/religions/religions-books/quran/quran.component';
import { ReligionsBooksComponent } from './pages/religions/religions-books/religions-books.component';
import { ReligionsComponent } from './pages/religions/religions.component';
import { namesComponent } from './pages/the-creator/names/names.component';
import { TheCreatorComponent } from './pages/the-creator/the-creator.component';
import { JurisprudencesComponent } from './pages/islam/jurisprudences/jurisprudences.component';

const routes: Routes = [
  { path:'religions',component: ReligionsComponent },
  { path:'islam',component: IslamComponent },
  //{ path:'continents',component: ContinentsComponent },
  //{ path:'continents/countries',component: StatesComponent },
  //{ path:'continents/countries/states',component: StatesComponent },
  // header
  { path:'religionsBooks',component: ReligionsBooksComponent },
  { path:'religionsBooks/quran',component: QuranComponent },
  { path:'religionsBooks/quran/souwar/:index',component: AyaComponent },

  { path:'theCreator',component: TheCreatorComponent },
  { path:'theCreator/names',component: namesComponent },

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
  { path:'islam/pillars',component: IslamPillarsComponent,canActivate:[NotAuthGuard] }, // أركان الاسلام


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
