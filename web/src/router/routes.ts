//router instance


type Routes = {path: string, name: string}
class Router {

  constructor(public name: string, public routes: Routes[]){}

  start(): {} {
    return {
      name: this.name,
      routes: this.routes
    }
  }
}


const routerInstance = new Router('routerInstance', [{
      path: "/",
      name: "Root"
  },
  {
      path: '/about',
      name: "About"
  },
  {
      path: '/contact',
      name: "Contact"
  }

])


export default routerInstance