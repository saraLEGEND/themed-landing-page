import { Component, ElementRef, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { icons, path, Size } from './icon';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  private currentSize: Size = 'small';

  constructor(
    private readonly domSanitizer: DomSanitizer,
    private readonly elementRef: ElementRef
  ) {}

  @Input()
  set size(size: Size) {
    this.currentSize = size;
    this.setElementSize();
  }

  @Input()
  set icon(icon: string) {
    this.iconPath(icon);
  }

  private sizeValue(): string {
    const sizeMap: { [key in Size]: string } = {
      xsmall: '1.25rem',
      small: '1.5rem',
      medium: '1.8rem',
      large: '2.4rem',
      fill: ''
    };

    return sizeMap[this.currentSize];
  }

  private setElementSize(): void {
    const nativeElement = this.elementRef.nativeElement as HTMLElement;
    nativeElement.style.width = this.sizeValue();
    nativeElement.style.height = this.sizeValue();
    nativeElement.style.minWidth = this.sizeValue();
    nativeElement.style.minHeight = this.sizeValue();
  }

  private iconPath(icon: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${ path }${ icons[icon] }`);
  }
}
