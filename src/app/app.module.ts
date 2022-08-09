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
import { ReligionsBooksComponent } from './religions-books/religions-books.component';
import { AyaComponent } from './religions-books/quran/aya/aya.component';
import { QuranComponent } from './religions-books/quran/quran.component';
import { NamesOfAllahService } from 'src/services/allah/names-of-allah.service';




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
    ReligionsBooksComponent
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
