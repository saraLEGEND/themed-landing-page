import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ButtonTypes } from './button.types';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  imports: [
    NgClass,
    IconComponent
  ],
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  text: string;
  @Input()
  type: ButtonTypes = 'primary';
  @Input()
  icon: string;

  get classes(): string {
    return `btn btn-${ this.type }`;
  }
}
