const apples = 5;
let speed: string = "fast";
let isTrue: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let colors: string[] = ["red", "blue", "white"];

class Car {

}

let car: Car = new Car();


let point: {x: number; y: number} = {
  x: 10,
  y: 20
}

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// When to use anotations
//1} Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';

const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);

// 2) Whn we declare variable on one line and intialize it later

let words = ['red', 'hello', 'really'];
let foundWord: boolean;

for (let i= 0; i < words.length; i++)
{
  if(words[i] === 'hello')
  {
    foundWord = true;
  }
}

// 3) Variable whos type can not be infered correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;


for (let i= 0; i < numbers.length; i++)
{
  if(numbers[i] > 0 )
  {
    numberAboveZero = numbers[i];
  }
}