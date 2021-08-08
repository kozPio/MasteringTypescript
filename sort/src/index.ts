import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList} from './LinkedList';


let arr: string ='kaxwi';
let arr2: number[] = [9, 4,10, 20,1];


const numbersCollection = new NumbersCollection([9, 4,10, 20,1, -5]);
numbersCollection.sort()

const sorter = new Sorter(arr);
const sorter2 = new Sorter(arr2);




console.log(numbersCollection.data)


const word= new CharactersCollection('helloa');
word.sort();
console.log(word.data)


const linkedList = new LinkedList();
linkedList.add(590);
linkedList.add(10);
linkedList.add(49);
linkedList.add(73);
linkedList.add(-5);


linkedList.sort();
linkedList.print()