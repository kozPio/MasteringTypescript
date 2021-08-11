
import { Model } from './Model';
import {Atributes} from './Atributes';
import { ApiSync } from "./ApiSync";
import {Eventing} from './Eventing';


export interface UserData {
  id?: number;
  name?: String;
  age?: number
  
}


const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserData> {
  
  static buildUser(attrs: UserData): User {
    return new User(
      new Atributes<UserData>(attrs),
      new Eventing(),
      new ApiSync<UserData>(rootUrl)
    );
  }

}

