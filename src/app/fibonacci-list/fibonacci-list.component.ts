import { Component, Input } from '@angular/core';
import { createList } from "../helper"

@Component({
  selector: 'app-fibonacci-list',
  templateUrl: './fibonacci-list.component.html',
  styleUrls: ['./fibonacci-list.component.scss']
})
export class FibonacciListComponent {

  inputNumber = ""
  activated = false
  list!: string
  arrayLength!: number
  plural = true

  createFibonacciArrayUpperbound(upperBound: string): number[] {
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

  /* 
    createFibonacciArraynTerms(terms: string): number[] {
      let fibonacciArray: number[] = [0, 1]
      for (let i = 0; i < Number(terms) - 2; i++) {
        let numberToAdd: number =
          fibonacciArray[fibonacciArray.length - 2] +
          fibonacciArray[fibonacciArray.length - 1]
        fibonacciArray.push(numberToAdd)
      }
      return fibonacciArray
    }
   */

  onClick(inputNumber: string): void {
    if (Number(inputNumber) < 1) {
      this.plural = false
    }
    else {
      this.plural = true
    }
    const fibonacciArray = this.createFibonacciArrayUpperbound(inputNumber)
    this.list = createList(fibonacciArray)
    this.arrayLength = fibonacciArray.length
    this.inputNumber = inputNumber
    this.activated = true
  }




}
