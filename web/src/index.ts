import { User } from "./models/User";

const user = new User({name: 'John', age: 20});

user.set({ name: 'Adrian'})


console.log(user.get('name'));
console.log(user.get('age'))

