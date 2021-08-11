import { User } from "./models/User";



const user = User.buildUser({id: 1});



user.on('change', ()=>{
  console.log(user);
})

user.fetch();




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
