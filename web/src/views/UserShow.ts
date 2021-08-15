import { View } from "./View";
import { User, UserData } from "../models/User";

export class UserShow extends View<User, UserData>{

template(): string {
  return `
    <div>
      <h1>User ${this.model.get('name')}</h1>
      <div>User Name: ${this.model.get('name')}</div>
      <div>User Age: ${this.model.get('age')}</div>
    </div>
    `
}
  
}