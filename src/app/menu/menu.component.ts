import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute } from '../app-routes.enum';
import { MenuItemComponent } from './item/item.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  imports: [
    RouterLink,
    MenuItemComponent
  ],
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  protected readonly appRoutes = AppRoute;
}
