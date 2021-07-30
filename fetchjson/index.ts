import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean
}

axios.get(url).then( response =>{
  const todo =response.data as Todo;

  const id = todo.id
  const title = todo.title
  const compleated = todo.completed

  logTodo(id, title, compleated)
}

);


const logTodo = (id: number, title: string, compleated: boolean) =>{
  console.log(`
    The todo with ${id}
    Has a title of ${title}
    And its finished ${compleated}
  `);
}
