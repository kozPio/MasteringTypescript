import { FinalSorter } from "./FinalSorter";

export class CharactersCollection extends FinalSorter {

  

  constructor(public data: string){
    super();
  }

  get length(): number {
    return this.data.length;
  }
 

  compare(firstIteretionIndex: number, secondIterationIndex: number): boolean {
    
    return this.data[firstIteretionIndex].toLowerCase() > this.data[secondIterationIndex].toLowerCase();
  }

  swap(firstIteretionIndex: number, secondIterationIndex: number): void {
    const characters = this.data.split('')
    const temp  = characters[secondIterationIndex];
    characters[secondIterationIndex] = characters[firstIteretionIndex];
    characters[firstIteretionIndex] = temp;

    this.data = characters.join('');
  }
}