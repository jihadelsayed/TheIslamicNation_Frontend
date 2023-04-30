import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';


// ng ----- Matriall
import { MaterialModule } from './material';

///forms
import {FormsModule,
//  ReactiveFormsModule
} from '@angular/forms'

///http request api request
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//notification api jeson
//import { SelectionLoaderModule } from './selection-loader/selection-loader.module';

//import { ChatService } from 'src/services/websocket/chat.service';
//import { WebsocketService } from 'src/services/websocket/websocket.service';
//import { SearchService } from 'src/services/search/search.service';
import { SpinnerComponent } from './spinner/spinner.component';

import { QuranService } from 'src/services/Quran/Quran.service';

import { EchartsxModule } from 'echarts-for-angular';

import { FooterComponent } from './footer/footer.component';
import { WhoComponent } from './footer/who/who.component';
import { WhatComponent } from './footer/what/what.component';
import { WhyComponent } from './footer/why/why.component';
import { HowComponent } from './footer/how/how.component';
import { ContactComponent } from './footer/contact/contact.component';

import { FAQComponent } from './footer/faq/faq.component';
import { CookiesComponent } from './footer/cookies/cookies.component';
import { PolicyComponent } from './footer/policy/policy.component';

import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { UserNotificationsMenuComponent } from './header/user-notifications-menu/user-notifications-menu.component';
import { LoginMenuComponent } from './header/login-menu/login-menu.component';
import { MenuComponent } from './header/menu/menu.component';
import { SearchMenuComponent } from './header/search-menu/search-menu.component';

import { AuthGuard } from './authorization/services/auth.guard';
import { JwtInterceptor } from './authorization/Jwt-interceptor.interceptor';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HomeComponent } from './pages/home/home.component';
import { IslamComponent } from './pages/islam/islam.component';


import { AppComponent } from './app.component';


import { MenuContentComponent } from './header/menu/menu-content/menu-content.component';
import { SubMenuContentComponent } from './header/menu/menu-content/sub-menu/sub-menu-content/sub-menu-content.component';
import { SubMenuComponent } from './header/menu/menu-content/sub-menu/sub-menu.component';
import { AsideContentComponent } from './header/menu/menu-content/sub-menu/sub-menu-content/aside/aside-content/aside-content.component';
import { AsideComponent } from './header/menu/menu-content/sub-menu/sub-menu-content/aside/aside.component';



@NgModule({
  declarations: [
    AppComponent,

    // authorization
    AuthorizationComponent,

    // header component
    HeaderComponent,
    LoginMenuComponent,
    UserMenuComponent,
    UserNotificationsMenuComponent,
    MenuComponent,
    SearchMenuComponent,

    // spinner component
    SpinnerComponent,

    // footer component
    FooterComponent,
    WhoComponent,
    WhatComponent,
    WhyComponent,
    HowComponent,
    ContactComponent,
    FAQComponent,
    CookiesComponent,
    PolicyComponent,

    // pages component
    WhatComponent,
    HomeComponent,
    IslamComponent,

    AsideComponent,
    AsideContentComponent,

    MenuContentComponent,
        SubMenuComponent,

    SubMenuContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    //ReactiveFormsModule,
    // FlexLayoutModule,
    //SelectionLoaderModule,
    //ToastrModule.forRoot(),
    //BrowserAnimationsModule,
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
  providers: [AuthGuard,
    //ChatService,WebsocketService,SearchService,
    //QuranService,NamesService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
