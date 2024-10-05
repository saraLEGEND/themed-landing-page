import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[secondary]', standalone: true })
export class SecondaryDirective {
  @HostBinding('class')
  className = 'secondary';
}
