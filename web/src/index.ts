import { UserForm } from './views/UserForm';
import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';



const root = document.getElementById('root');



const collection = User.buildUserCollection();





if(root){
  //const userEdit = new UserEdit(root , user);
  const userList = new UserList(root , collection );


  userList.render();
  
  
  //userEdit.render();

  //console.log(userEdit)
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
