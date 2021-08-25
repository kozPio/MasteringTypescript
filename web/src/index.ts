import { UserForm } from './views/UserForm';
import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { App } from './views/App';
import routerInstance from './router/routes'


const root = document.getElementById('root');





 App.render();

 const app = document.getElementById('App');

 const collection = User.buildUserCollection();





if(app){
  //const userEdit = new UserEdit(root , user);
  const userList = new UserList(app , collection );


  userList.render();
  
  
  //userEdit.render();

  //console.log(userEdit)
}else {
  throw new Error('Root element not found');
}


  //get root div for rendering
  

    //create the route instance

    //get all router links
    let definedRoutes = Array.from(document.querySelectorAll('[router-link]'));


    // method to navigate
    let navigate = e => {
        let route = e.target.attributes[0].value;

        // redirect to the router instance
        let routeInfo = routerInstance.routes.filter(r => r.path === route)[0]
        if (!routeInfo) {
            window.history.pushState({}, '', 'error')
            app.innerHTML = `This route is not Defined`
        } else {
            window.history.pushState({}, '', routeInfo.path)
            app.innerHTML = `You are on the ${routeInfo.name} path`
        }
    }


    //iterate over all defined routes
    definedRoutes.forEach(route => {
        route.addEventListener('click', navigate, false)
    })


    // get current path
    let currentPath = window.location.pathname;
    if (currentPath === '/') {
        app.innerHTML = 'You are on Home page'
    } else {
        // check if route exist in the router instance 
        let route = routerInstance.routes.filter(r => r.path === currentPath)[0];
        if (route) {
            app.innerHTML = `You are on the ${route.name} path`
        } else {
            app.innerHTML = `This route is not Defined`
        }

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
