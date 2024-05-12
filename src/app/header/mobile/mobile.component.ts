import { Component } from '@angular/core';
import { BurgerMenuComponent } from "./burger-menu/burger-menu.component";

@Component({
    selector: 'app-mobile',
    standalone: true,
    templateUrl: './mobile.component.html',
    styleUrl: './mobile.component.scss',
    imports: [BurgerMenuComponent]
})
export class MobileComponent {

}
