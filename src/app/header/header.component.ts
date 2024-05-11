import { Component } from '@angular/core';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { MobileComponent } from "./mobile/mobile.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [TopComponent, BottomComponent, MobileComponent]
})
export class HeaderComponent {

}
