import 'reflect-metadata';


const plane = {
  color: 'red'
};

Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10 , plane);

const note =Reflect.getMetadata('note', plane);
const height =Reflect.getMetadata('height', plane);

//console.log(height);

Reflect.defineMetadata('note2', 'hi there', plane, 'color');

const note2 = Reflect.getMetadata('note2', plane, 'color');

//console.log(note2)

@printMeatadata
class Plane {
  color: string = 'red';

  @markFunction('Hi There secret')
  fly(): void {
    console.log('vrrr')
  }
};

function markFunction(secretInformation: string) {
   return function (target: Plane, key: string) {
  Reflect.defineMetadata('secret', secretInformation, target, key);

}
}


function printMeatadata(target: typeof Plane) {
  for (let key in target.prototype) {
   const secret = Reflect.getMetadata('secret', target.prototype, key);
   console.log(secret);
  }
}