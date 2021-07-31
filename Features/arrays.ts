const carMakers = ['ford', 'toyota', 'nissan'];
const dates = [new Date(), new Date()];

const carsByMaker = [
  ['nissan'],
  ['toyota'],
  ['volvo']
];


// Help with inference when extracting value

const firstCar = carMakers[1];
const myCar = carMakers.pop();

//Prevent incopatible values


/// help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});


// Flexible types

const importantDates: (Date | string)[] = [new Date()];
importantDates.push(' 19-20-2019');
importantDates.push(new Date());
