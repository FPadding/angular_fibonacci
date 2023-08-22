import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputNumberService {


  @Input() inputNumber: string = ""

  getNumber(): string {
    return this.inputNumber
  }

  writeNumber(inputNumber: string): void {
    this.inputNumber = inputNumber
  }

}
