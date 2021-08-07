import faker from 'faker';
import  {Marker} from './CustomMap';

export class Company implements Marker{
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';


  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
    <div>
    <h1><b>Company ${this.companyName}</b></h1>
    <h3>is on the market since 11981 and has profits way too enormus to be a small company!</h3> 
    <h3>Their CatchPhrse is ${this.catchPhrase} </h3>
    </div>
    `

  }
}