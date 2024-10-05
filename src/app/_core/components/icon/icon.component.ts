import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Size } from './icon';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @HostBinding('style.-webkit-mask-image')
  private _path!: string;
  @HostBinding('style.background-color')
  private _backgroundColor = 'black';
  @HostBinding('style.width')
  private _height = this.sizeValue();
  @HostBinding('style.height')
  private _width = this.sizeValue();

  private readonly basePath = 'assets/icons/';
  private _size: Size = 'small';

  @Input()
  set path(filePath: string) {
    this._path = `url(${ this.basePath }${ filePath }.svg)`;
  }

  @Input()
  set backgroundColor(color: string) {
    this._backgroundColor = color;
  }

  @Input()
  set size(size: Size) {
    this._size = size;
  }

  ngOnInit(): void {
    this._height = this.sizeValue();
    this._width = this.sizeValue();
  }

  private sizeValue(): string {
    const sizeMap: { [key in Size]: string } = {
      xsmall: '1.25rem',
      small: '1.5rem',
      medium: '1.8rem',
      large: '2.4rem',
      fill: '100%'
    };

    return sizeMap[this._size];
  }
}
