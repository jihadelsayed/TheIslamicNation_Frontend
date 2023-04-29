import { Routes } from '@angular/router';
import { FooterComponent } from './footer.component';
import { ContactComponent } from './contact/contact.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FAQComponent } from './faq/faq.component';
import { HowComponent } from './how/how.component';
import { PolicyComponent } from './policy/policy.component';
import { WhatComponent } from './what/what.component';
import { WhoComponent } from './who/who.component';
import { WhyComponent } from './why/why.component';


export const footerRoutes: Routes = [
  { path:'how',component: HowComponent },
  { path:'who',component: WhoComponent },
  { path:'what',component: WhatComponent },
  { path:'why',component: WhyComponent },
  { path:'contact',component: ContactComponent },
  { path:'faq',component: FAQComponent },
  { path:'cookies',component: CookiesComponent },
  { path:'policy',component: PolicyComponent },
];
