import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'contact', component:ContactComponent},
    {path:'chat', component:ChatComponent},
    {path:'about', component:AboutComponent}
];
