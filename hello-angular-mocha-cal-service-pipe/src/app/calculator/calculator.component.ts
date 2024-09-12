import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
    <div>
      <input [(ngModel)]="num1" type="number" />
      <input [(ngModel)]="num2" type="number" />
      <button (click)="add()">Add</button>
      <p>Result: {{ result }}</p>
    </div>
  `
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  add(): void {
    this.result = this.num1 + this.num2;
  }
}
