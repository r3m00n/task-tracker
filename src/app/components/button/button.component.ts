import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [ngStyle]="{ 'background-color': color }"
      (click)="this.btnClick.emit()"
      class="btn"
    >
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  constructor() {}
}
