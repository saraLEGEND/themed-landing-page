import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../_core/components/button/button.component';
import { Icon } from '../_core/components/icon/icon';
import { IconComponent } from '../_core/components/icon/icon.component';
import { PrimaryDirective } from '../_core/directives/primary.directive';
import { AppRoute } from '../app-routes.enum';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  imports: [
    IconComponent,
    ButtonComponent,
    RouterLinkActive,
    RouterLink,
    PrimaryDirective,
    NgClass
  ],
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  protected readonly appRoutes = AppRoute;
  isOpen = false;

  get isOpenClasse(): string {
    return this.isOpen ? 'show' : 'hide';
  }

  get isOpenIcon(): Icon {
    return this.isOpen ? 'close' : 'burger-menu';
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
