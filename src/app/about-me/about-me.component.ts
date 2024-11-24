import { Component, OnInit } from '@angular/core';
import { BaseDirective } from '../_core/directives/base.directive';
import { Theme } from '../_core/themes/theme.enum';
import { ThemeService } from '../_core/themes/theme.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent extends BaseDirective implements OnInit {
  currentTheme: Theme;

  constructor(protected readonly themeService: ThemeService) {
    super();
  }

  get aboutMeImage(): string {
    return `assets/images/${ this.currentTheme }-about-me-carbon.png`;
  }

  get aboutMeImageAlt(): string {
    return `SaraLegend in ${ this.currentTheme } theme`;
  }

  ngOnInit(): void {
    this.themeService.theme$.pipe(this.takeUntilDestroy()).subscribe(theme => this.currentTheme = theme);
  }
}
