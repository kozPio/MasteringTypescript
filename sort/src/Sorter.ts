export class Sorter {
  constructor(public collection: number[] | string) { }


  sort(): void {
    
    let tempArr: Array<string | number> = [];
    

    if (typeof this.collection === 'string'){
      for(let i=0; i < this.collection.length; i++){
        tempArr.push(this.collection[i].toLowerCase());
      }
    } else if(this.collection instanceof Array ){
      tempArr = this.collection;
    }

      for(let i=0; i < tempArr.length; i++){
        for(let j=i+1; j<tempArr.length; j++){
          if(tempArr[j]< tempArr[i]){
            let leftHand: number | string =tempArr[i];
            tempArr[i] = tempArr[j];
            tempArr[j] = leftHand;
          }
        }
      }
    

    console.log(tempArr);

    
  }
}