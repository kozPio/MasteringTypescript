
import { Model } from './Model';
import {Atributes} from './Atributes';
import { ApiSync } from "./ApiSync";
import {Eventing} from './Eventing';
import { Collection } from './Collection';


export interface UserData {
  id?: number;
  name?: String;
  age?: number
  
}


const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserData> {

  static buildUserCollection(): Collection<User, UserData> {
    return new Collection<User, UserData>(
      rootUrl,
       (json: UserData) => User.buildUser(json)
      );
  }
  
  static buildUser(attrs: UserData): User {
    return new User(
      new Atributes<UserData>(attrs),
      new Eventing(),
      new ApiSync<UserData>(rootUrl)
    );
  }

  setRandomAge(): void{
    const age = Math.round(Math.random() * 100);
    this.set({age});
  }

  

}

