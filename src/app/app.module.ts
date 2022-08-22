import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// ng ----- Matriall

///forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

///http request api request
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//notification api jeson
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { httpInterceptor } from 'src/interceptor/http-interceptor';
import { SelectionLoaderModule } from './selection-loader/selection-loader.module';
import { UserService } from 'src/services/auth/user.service';
import { AuthGuard } from 'src/services/auth/auth.guard';
import { ChatService } from 'src/services/websocket/chat.service';
import { WebsocketService } from 'src/services/websocket/websocket.service';
import { SearchService } from 'src/services/search/search.service';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MuslimsComponent } from './muslims/muslims.component';
import { CardMuslimComponent } from './muslims/card-muslim/card-muslim.component';
import { DetailMuslimComponent } from './muslims/detail-muslim/detail-muslim.component';
import { HomeComponent } from './home/home.component';
import { QuranService } from 'src/services/Quran/Quran.service';
import { ContinentsComponent } from './continents/continents.component';
import { CountriesComponent } from './continents/countries/countries.component';
import { StatesComponent } from './continents/countries/states/states.component';
import { IslamComponent } from './religions/islam/islam.component';
import { ReligionsComponent } from './religions/religions.component';
import { EchartsxModule } from 'echarts-for-angular';
import { AllahComponent } from './allah/allah.component';
import { LanguagesComponent } from './languages/languages.component';
import { ArabicComponent } from './languages/arabic/arabic.component';

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
import { MinistriesComponent } from './ministries/ministries.component';
import { AyaComponent } from './religions/religions-books/quran/aya/aya.component';
import { QuranComponent } from './religions/religions-books/quran/quran.component';
import { ReligionsBooksComponent } from './religions/religions-books/religions-books.component';
import { CreaturesComponent } from './creatures/creatures.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    SpinnerComponent,
    MuslimsComponent,
    CardMuslimComponent,
    DetailMuslimComponent,
    CountriesComponent,
    StatesComponent,
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
    CreaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EchartsxModule,
    ToastrModule.forRoot(),
    // FlexLayoutModule,
    SelectionLoaderModule,
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
