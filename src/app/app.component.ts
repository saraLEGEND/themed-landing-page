import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './_core/components/button/button.component';
import { IconComponent } from './_core/components/icon/icon.component';
import { PanelComponent } from './_core/components/panel/panel.component';
import { PrimaryDirective } from './_core/directives/primary.directive';
import { SecondaryDirective } from './_core/directives/secondary.directive';
import { TertiaryDirective } from './_core/directives/terniary.directive';
import { ThemeDirective } from './_core/directives/theme.directive';
import { Theme } from './_core/themes/theme.enum';
import { ThemeService } from './_core/themes/theme.service';
import { AppRoute } from './app-routes.enum';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ThemeDirective, ButtonComponent, IconComponent,
    PrimaryDirective, SecondaryDirective, TertiaryDirective, MenuComponent, NgStyle, PanelComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly appRoutes = AppRoute;
  flipAll = false;

  constructor(private readonly themeService: ThemeService) {}

  light(): void {
    this.themeService.setTheme(Theme.LIGHT);
  }

  dark(): void {
    this.themeService.setTheme(Theme.DARK);
  }

  candy(): void {
    this.themeService.setTheme(Theme.CANDY);
  }

  toggleFlipAllPanel(): void {
    this.flipAll = !this.flipAll;
  }
}
