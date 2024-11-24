import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

const RIPPLE_ANIMATION_DURATION = 600;

@Directive({ selector: '[rippleEffect]', standalone: true })
export class RippleEffectDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  createRipple(event: MouseEvent): void {
    const targetElement = this.el.nativeElement;

    // Remove any existing ripple
    const existingRipple = targetElement.querySelector('.ripple');
    if (existingRipple) {
      this.renderer.removeChild(targetElement, existingRipple);
    }

    // Create the ripple element
    const ripple = this.renderer.createElement('span');
    this.renderer.addClass(ripple, 'ripple');

    // Get the dimensions and calculate the position
    const rect = targetElement.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    // Apply styles to the ripple
    this.renderer.setStyle(ripple, 'width', `${ size }px`);
    this.renderer.setStyle(ripple, 'height', `${ size }px`);
    this.renderer.setStyle(ripple, 'left', `${ x }px`);
    this.renderer.setStyle(ripple, 'top', `${ y }px`);

    // Append ripple to the target element
    this.renderer.setStyle(targetElement, 'position', 'relative');
    this.renderer.setStyle(targetElement, 'overflow', 'hidden');
    this.renderer.appendChild(targetElement, ripple);

    // Remove ripple after animation ends
    setTimeout(() => {
      this.renderer.removeChild(targetElement, ripple);
    }, RIPPLE_ANIMATION_DURATION);
  }
}
