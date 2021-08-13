import { UserForm } from './views/UserForm';
import { User } from './models/User';
import { UserEdit } from './views/UserEdit';


const user = User.buildUser({name: 'Adam', age: 20})

const root = document.getElementById('root');


if(root){
  const userEdit = new UserEdit(root , user);

  userEdit.render();

  console.log(userEdit)
}else {
  throw new Error('Root element not found');
}





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
