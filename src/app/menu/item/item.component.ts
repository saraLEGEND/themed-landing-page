import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon, Size } from '../../_core/components/icon/icon';
import { IconComponent } from '../../_core/components/icon/icon.component';
import { RippleEffectDirective } from '../../_core/themes/directives/ripple-effect.directive';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  templateUrl: './item.component.html',
  imports: [
    RouterLink,
    IconComponent,
    RippleEffectDirective
  ],
  styleUrls: ['./item.component.scss']
})
export class MenuItemComponent {
  @Input()
  routerLink: string;
  @Input()
  icon: Icon;
  @Input()
  size: Size;
  @Input()
  label: string;
}
