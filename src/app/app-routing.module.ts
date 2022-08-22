import { CreaturesComponent } from './creatures/creatures.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { PolicyComponent } from './footer/policy/policy.component';
import { CookiesComponent } from './footer/cookies/cookies.component';
import { FAQComponent } from './footer/faq/faq.component';
import { ContactComponent } from './footer/contact/contact.component';
import { WhyComponent } from './footer/why/why.component';
import { WhatComponent } from './footer/what/what.component';
import { WhoComponent } from './footer/who/who.component';
import { HowComponent } from './footer/how/how.component';
import { ArabicComponent } from './languages/arabic/arabic.component';
import { LanguagesComponent } from './languages/languages.component';
import { AllahComponent } from './allah/allah.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/services/auth/auth.guard';
import { NotAuthGuard } from 'src/services/auth/not-auth.guard';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ContinentsComponent } from './continents/continents.component';
import { CountriesComponent } from './continents/countries/countries.component';
import { StatesComponent } from './continents/countries/states/states.component';

import { HomeComponent } from './home/home.component';
import { MuslimsComponent } from './muslims/muslims.component';
import { IslamComponent } from './religions/islam/islam.component';
import { ReligionsComponent } from './religions/religions.component';
import { QuranComponent } from './religions/religions-books/quran/quran.component';
import { AyaComponent } from './religions/religions-books/quran/aya/aya.component';
import { ReligionsBooksComponent } from './religions/religions-books/religions-books.component';




const routes: Routes = [
  { path:'allah',component: AllahComponent },

  { path:'languages',component: LanguagesComponent },
  { path:'languages/arabic',component: ArabicComponent },

  { path:'ministries',component: MinistriesComponent },
  { path:'muslims',component: MuslimsComponent },

  { path:'religions',component: ReligionsComponent },
  { path:'religions/islam',component: IslamComponent },

  { path:'religions/religionsBooks',component: ReligionsBooksComponent },
  { path:'religions/religionsBooks/quran',component: QuranComponent },
  { path:'religions/religionsBooks/quran/souwar/:index',component: AyaComponent },

  { path:'continents',component: ContinentsComponent },
  { path:'continents/countries',component: StatesComponent },
  { path:'continents/countries/states',component: StatesComponent },

  { path:'creatures',component: CreaturesComponent },


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
  { path:'signup',component: SignUpComponent,canActivate:[NotAuthGuard] },
  { path:'signin',component: SignInComponent,canActivate:[NotAuthGuard] },
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
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
