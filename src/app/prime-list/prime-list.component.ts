import { Component } from '@angular/core';
import { createList } from '../helper';

@Component({
  selector: 'app-prime-list',
  templateUrl: './prime-list.component.html',
  styleUrls: ['./prime-list.component.scss']
})
export class PrimeListComponent {

  inputNumber = ""
  activated = false
  list!: string
  arrayLength!: number
  plural = true

  createNumberArray(upperBound: string): number[] {
    let numberArray: number[] = []
    for (let i = 1; i < Number(upperBound); i++) {
      numberArray.push(i + 1)
    }
    return numberArray
  }

  createPrimeArray(upperBound: string): number[] {
    let knownPrimes: number[] = []
    let numbersToCheck: number[] = this.createNumberArray(upperBound)
    while (numbersToCheck[0] ** 2 <= Number(upperBound)) {
      knownPrimes.push(numbersToCheck[0])
      numbersToCheck = numbersToCheck.filter(number => number % numbersToCheck[0])
    }
    const primeArray: number[] = knownPrimes.concat(numbersToCheck)
    return primeArray
  }

  onClick(inputNumber: string): void {
    if (inputNumber === "2") {
      this.plural = false
    }
    else {
      this.plural = true
    }
    const primeArray = this.createPrimeArray(inputNumber)
    this.list = createList(primeArray)
    this.arrayLength = primeArray.length
    this.inputNumber = inputNumber
    this.activated = true
  }

}
