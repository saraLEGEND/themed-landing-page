import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './_core/components/button/button.component';
import { IconComponent } from './_core/components/icon/icon.component';
import { PrimaryDirective } from './_core/themes/directives/primary.directive';
import { RippleEffectDirective } from './_core/themes/directives/ripple-effect.directive';
import { SecondaryDirective } from './_core/themes/directives/secondary.directive';
import { ThemeDirective } from './_core/themes/directives/theme.directive';
import { Theme } from './_core/themes/theme.enum';
import { ThemeService } from './_core/themes/theme.service';
import { AppRoute } from './app-routes.enum';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThemeDirective, ButtonComponent, IconComponent,
    PrimaryDirective, SecondaryDirective, RouterOutlet, MenuComponent, RippleEffectDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly appRoutes = AppRoute;

  constructor(private readonly themeService: ThemeService) {}

  light(): void {
    this.themeService.setTheme(Theme.LIGHT);
  }

  dark(): void {
    this.themeService.setTheme(Theme.DARK);
  }
}
