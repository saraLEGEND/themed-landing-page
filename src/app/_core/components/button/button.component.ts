import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  imports: [
    NgClass
  ]
})
export class ButtonComponent {
  get classes(): string {
    return `btn`;
  }
}
