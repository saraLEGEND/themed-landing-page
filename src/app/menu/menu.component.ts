import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../_core/components/icon/icon.component';
import { AppRoute } from '../app-routes.enum';
import { MenuItemComponent } from './item/item.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  imports: [
    RouterLink,
    MenuItemComponent,
    IconComponent
  ],
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  protected readonly appRoutes = AppRoute;
}
