import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nterms-list',
  templateUrl: './nterms-list.component.html',
  styleUrls: ['./nterms-list.component.scss']
})
export class NtermsListComponent implements OnChanges {
  @Input() inputNumber: string = "0"

  createFibonacciArray(terms: string): number[] {
    let fibonacciArray: number[] = [0, 1]
    for (let i = 0; i < Number(terms) - 2; i++) {
      let numberToAdd: number =
        fibonacciArray[fibonacciArray.length - 2] +
        fibonacciArray[fibonacciArray.length - 1]
      fibonacciArray.push(numberToAdd)
    }
    return fibonacciArray
  }

  createList(array: number[]): string {
    const list: string = array.join(", ")
    return list
  }

  list!: string

  ngOnChanges(changes: SimpleChanges): void {
    this.list = this.createList(this.createFibonacciArray(this.inputNumber))
  }


}
