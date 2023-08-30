import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  constructor(private router: Router) { }
  @Input() inputNumber: string = "0"

  isnTerms: boolean = true

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === "/nterms") {
          this.isnTerms = true
          this.list = this.createList(this.createFibonacciArraynTerms(this.inputNumber))
        } else {
          this.isnTerms = false
          this.list = this.createList(this.createFibonacciArrayUpperbound(this.inputNumber))
        }
      }
    })
  }

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

  createList(array: number[]): string {
    const list: string = array.join(", ")
    return list
  }

  list!: string

  ngOnChanges(): void {
    if (this.isnTerms) {
      this.list = this.createList(this.createFibonacciArraynTerms(this.inputNumber))
      this.isnTerms = true
    } else {
      this.list = this.createList(this.createFibonacciArrayUpperbound(this.inputNumber))
      this.isnTerms = false
    }
  }
}
