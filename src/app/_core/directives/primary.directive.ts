import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[primary]', standalone: true })
export class PrimaryDirective {
  @HostBinding('class')
  className = 'primary';
}
