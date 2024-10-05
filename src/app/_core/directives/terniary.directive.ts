import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[tertiary]', standalone: true })
export class TertiaryDirective {
  @HostBinding('class')
  className = 'tertiary';
}
