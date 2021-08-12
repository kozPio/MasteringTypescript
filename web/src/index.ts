import { UserForm } from './views/UserForm';
import { User } from './models/User';


const user = User.buildUser({name: 'Adam', age: 20})

const userForm = new UserForm(document.getElementById('root'), user);

userForm.render();




// const user = new User({name: 'John', age: 20});

// user.set({ name: 'Adrian'})


// user.on('change', () => {
//   console.log('change1')
// });
// user.on('change', () => {
//   console.log('change2')
// });
// user.on('save', () => {
//   console.log('save was triggered')
// });


// user.trigger('asd');
