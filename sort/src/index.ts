
class Sorter {
  constructor(public collection: number[]) { }


  sort(): void {

    arr = this.collection;

    for(let i=0; i < arr.length; i++){
      for(let j=i+1; j<arr.length; j++){
        if(arr[j]< arr[i]){
          let temp: number =arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    console.log(arr);
  }
}

let arr: number[] = [12, 18, 5, 10, 7, 2,-1];


const sorter = new Sorter(arr)

sorter.sort();



