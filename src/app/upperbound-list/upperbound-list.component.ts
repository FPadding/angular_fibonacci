import { Component, Input } from '@angular/core';
import { InputNumberService } from '../input-number.service';

@Component({
  selector: 'app-upperbound-list',
  templateUrl: './upperbound-list.component.html',
  styleUrls: ['./upperbound-list.component.scss']
})
export class UpperboundListComponent {
  inputNumber: string = "0"
  constructor(private inputNumberService: InputNumberService) { }
  createFibonacciArray(upperBound: string): number[] {
    let fibonacciArray: number[] = [0]
    let numberToAdd: number = 1
    while (numberToAdd <= Number(upperBound)) {
      fibonacciArray.push(numberToAdd)
      numberToAdd =
        fibonacciArray[fibonacciArray.length - 2] +
        fibonacciArray[fibonacciArray.length - 1]
    }
    return fibonacciArray
  }

  createList(array: number[]): string {
    const list: string = array.join(", ")
    return list
  }

  list!: string


  ngOnChanges(): void {
    console.log("ding")
    this.inputNumber = this.inputNumberService.getNumber()
    this.list = this.createList(this.createFibonacciArray(this.inputNumber))
  }

  refresh() {
    console.log("ding")
    this.inputNumber = this.inputNumberService.getNumber()
    this.list = this.createList(this.createFibonacciArray(this.inputNumber))
  }
}
