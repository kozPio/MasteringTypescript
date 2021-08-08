import { NumbersCollection } from "./NumbersCollection";


interface Sortable  {
  length: number;
  compare(firstIteretionIndex: number, secondIterationIndex:number): boolean;
  swap(firstIteretionIndexx: number, secondIterationIndex: number) : void;
}

export abstract class FinalSorter {
  
  abstract length: number;
  abstract compare(firstIteretionIndex: number, secondIterationIndex:number): boolean;
  abstract swap(firstIteretionIndexx: number, secondIterationIndex: number) : void;

  sort(): void {
    const {length} = this;
    
    for(let i=0; i < length; i++){
        for(let j=i+1; j< length; j++){   
          if(this.compare(i, j)){
            this.swap(i, j)
          }
      }

    }  
    
  }
}


