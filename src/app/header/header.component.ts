import { Component } from '@angular/core';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShopComponent } from './shop/shop.component';
import { LayoutService } from '../../services/layout/layout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // ✅ fixed "styleUrl" → "styleUrls"
  imports: [TopComponent, BottomComponent, MobileComponent, ShopComponent, CommonModule],
})
export class HeaderComponent {
  showShopHeader$ = this.layoutService.showShopHeader$;

  constructor(private layoutService: LayoutService) {}
}
