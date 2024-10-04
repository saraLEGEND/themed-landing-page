import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './_core/components/button/button.component';
import { IconComponent } from './_core/components/icon/icon.component';
import { ThemeDirective } from './_core/directives/theme.directive';
import { Theme } from './_core/themes/theme.enum';
import { ThemeService } from './_core/themes/theme.service';
import { AppRoute } from './app-routes.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ThemeDirective, ButtonComponent, IconComponent],
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

  candy(): void {
    this.themeService.setTheme(Theme.CANDY);
  }
}
