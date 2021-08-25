
const root = document.getElementById('root');


export class App {


  static render(): void {

    const templateElement = document.createElement('template');
    templateElement.innerHTML= `
    <div id="App" className="App">
        <button router-link="/">Home</button>
        <button router-link="/about">About</button>
        <button router-link="/contact">Contact</button>
        <button router-link="/unknown">Error</button>
    </div>`

    root.append(templateElement.content);

    
  }
}



