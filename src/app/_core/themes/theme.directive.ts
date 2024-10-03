import { Directive, OnInit, Renderer2 } from '@angular/core';
import { BaseDirective } from '../directive/base.directive';
import { ThemeService } from './theme.service';

@Directive({ selector: '[appTheme]', standalone: true })
export class ThemeDirective extends BaseDirective implements OnInit {

  constructor(
    private readonly themeService: ThemeService,
    private readonly renderer: Renderer2
  ) {
    super();
  }

  ngOnInit(): void {
    this.themeService.theme$.pipe(this.takeUntilDestroy()).subscribe(theme => this.updateTheme(theme));
  }

  private updateTheme(theme: string): void {
    this.removeTheme();

    this.renderer.setAttribute(document.body, `theme`, theme);
  }

  private removeTheme(): void {
    this.renderer.removeAttribute(document.body, 'theme');
  }
}
