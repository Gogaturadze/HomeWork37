import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Fibonaci';

  generateFibonacci() {
    let exportNum: any = document.getElementById('exportNum');
    let numValue: number = parseInt(exportNum.value);
    let output: any = document.getElementById('output');
    let nums: number[] = [];
    let num1: number = 0;
    let num2: number = 1;
    let nextNum: number;
    for (let i = 0; i <= numValue; i++) {
      nums.push(num1);
      nextNum = num1 + num2;
      num1 = num2;
      num2 = nextNum;
    }
    output.innerHTML = nums.join(', ');
  }
}
