import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

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
  get classes(): string {
    return `btn`;
  }
}
