import { Component } from '@angular/core';
import { InputNumberService } from './input-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private inputNumberService: InputNumberService) { }
  title = 'angular-fibonacci';
  inputNumber: string = ""

  onChange() {
    this.inputNumberService.writeNumber(this.inputNumber)
  }
}
