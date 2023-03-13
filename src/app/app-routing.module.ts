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

import { islamRoutes } from './pages/islam/islam-routing.module';
import { creaturesRoutes } from './pages/islam/creatures/creatures-routing.module';
import { homeRoutes } from './pages/home/home-routing.module';
import { rhetoricRoutes } from './pages/islam/rhetoric/rhetoric-routing.module';
import { muslimsRoutes } from './pages/islam/muslims/muslims-routing.module';
import { creedRoutes } from './pages/islam/creed/creed-routing.module';


const routes: Routes = [
  // header
  // footer
  { path:'how',component: HowComponent },
  { path:'who',component: WhoComponent },
  { path:'what',component: WhatComponent },
  { path:'why',component: WhyComponent },
  { path:'contact',component: ContactComponent },
  { path:'faq',component: FAQComponent },
  { path:'cookies',component: CookiesComponent },
  { path:'policy',component: PolicyComponent },


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
  imports: [
    RouterModule.forChild(homeRoutes), // home routes
    RouterModule.forChild(islamRoutes), // islam routes
    RouterModule.forChild(rhetoricRoutes), // rhetoric routes
    RouterModule.forChild(muslimsRoutes), // muslims routes
    RouterModule.forChild(creaturesRoutes), // creatures routes
    RouterModule.forChild(creedRoutes), // angels routes

    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
