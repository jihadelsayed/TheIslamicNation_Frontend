import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';


// ng ----- Matriall
import { MaterialModule } from './material';

///forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

///http request api request
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//notification api jeson
import { httpInterceptor } from 'src/interceptor/http-interceptor';
import { SelectionLoaderModule } from './selection-loader/selection-loader.module';
import { UserService } from 'src/services/auth/user.service';
import { AuthGuard } from 'src/services/auth/auth.guard';
import { ChatService } from 'src/services/websocket/chat.service';
import { WebsocketService } from 'src/services/websocket/websocket.service';
import { SearchService } from 'src/services/search/search.service';
import { SpinnerComponent } from './spinner/spinner.component';

import { QuranService } from 'src/services/Quran/Quran.service';

import { EchartsxModule } from 'echarts-for-angular';

import { NamesOfAllahService } from 'src/services/allah/names-of-allah.service';
import { FooterComponent } from './footer/footer.component';
import { WhoComponent } from './footer/who/who.component';
import { WhatComponent } from './footer/what/what.component';
import { WhyComponent } from './footer/why/why.component';
import { HowComponent } from './footer/how/how.component';
import { ContactComponent } from './footer/contact/contact.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { UserNotificationsMenuComponent } from './header/user-notifications-menu/user-notifications-menu.component';
import { FAQComponent } from './footer/faq/faq.component';
import { CookiesComponent } from './footer/cookies/cookies.component';
import { PolicyComponent } from './footer/policy/policy.component';
import { AllahComponent } from './header/the-creator/allah/allah.component';
import { AyaComponent } from './header/religions/religions-books/quran/aya/aya.component';
import { ArabicComponent } from './header/languages/arabic/arabic.component';
import { LanguagesComponent } from './header/languages/languages.component';
import { CreaturesComponent } from './header/creatures/creatures.component';
import { HomeComponent } from './header/home/home.component';
import { CardMuslimComponent } from './header/muslims/card-muslim/card-muslim.component';
import { DetailMuslimComponent } from './header/muslims/detail-muslim/detail-muslim.component';
import { MuslimsComponent } from './header/muslims/muslims.component';
import { IslamComponent } from './header/islam/islam.component';
import { QuranComponent } from './header/religions/religions-books/quran/quran.component';
import { ReligionsBooksComponent } from './header/religions/religions-books/religions-books.component';
import { ReligionsComponent } from './header/religions/religions.component';
import { TheCreatorComponent } from './header/the-creator/the-creator.component';
import { CountriesComponent } from './header/muslims/continents/countries/countries.component';
import { MinistriesComponent } from './header/muslims/ministries/ministries.component';
import { ContinentsComponent } from './header/muslims/continents/continents.component';
import { ProvisionsComponent } from './header/islam/provisions/provisions.component';
import { CreedsComponent } from './header/islam/creeds/creeds.component';
import { DoctrinesComponent } from './header/islam/doctrines/doctrines.component';
import { JurisprudencesComponent } from './header/islam/jurisprudences/jurisprudences.component';
import { IslamPillarsComponent } from './header/islam/islam-pillars/islam-pillars.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpinnerComponent,
    MuslimsComponent,
    CardMuslimComponent,
    DetailMuslimComponent,
    CountriesComponent,
    WhatComponent,
    QuranComponent,
    HomeComponent,
    AyaComponent,
    ContinentsComponent,
    IslamComponent,
    ReligionsComponent,
    AllahComponent,
    LanguagesComponent,
    ArabicComponent,
    ReligionsBooksComponent,
    FooterComponent,
    WhoComponent,
    WhatComponent,
    WhyComponent,
    HowComponent,
    ContactComponent,
    UserMenuComponent,
    UserNotificationsMenuComponent,
    FAQComponent,
    CookiesComponent,
    PolicyComponent,
    MinistriesComponent,
    CreaturesComponent,
    TheCreatorComponent,
    ProvisionsComponent,
    CreedsComponent,
    DoctrinesComponent,
    JurisprudencesComponent,
    IslamPillarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    EchartsxModule,
    //FormsModule,
    //ReactiveFormsModule,
    // FlexLayoutModule,
    SelectionLoaderModule,
    //ToastrModule.forRoot(),
    // BrowserAnimationsModule,
    //
    //
    //
    //
    //
    // AvatarModule,
    // StripeModule.forRoot(""),
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   // Register the ServiceWorker as soon as the app is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // })
  ],
  providers: [UserService,AuthGuard,ChatService,WebsocketService,SearchService,QuranService,NamesOfAllahService,
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
