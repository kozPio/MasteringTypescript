import { FinalSorter } from "./FinalSorter";

export class NumbersCollection extends FinalSorter {

  constructor(public data: number[]){
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(firstIteretionIndex: number, secondIterationIndex: number): boolean {
    
    return this.data[firstIteretionIndex] > this.data[secondIterationIndex];
  }

  swap(firstIteretionIndex: number, secondIterationIndex: number): void {
    const temp  = this.data[secondIterationIndex];
    this.data[secondIterationIndex] = this.data[firstIteretionIndex];
    this.data[firstIteretionIndex] = temp;
  }

  
}