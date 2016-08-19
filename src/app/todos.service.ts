import { Injectable} from '@angular/core';
import { Init } from "./init-todos"; //Todo data

@Injectable()
export class TodosService extends Init {

  constructor() {
    //Super allows you access the methods that are in the Init file
    super();

    console.log("Todo service initializeed ...");
    //Now you are able to call the load function here with this.
    this.load();
  }

  //Gets the data from the localStorage
  getTodos() {
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteItem(todoText) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].text == todoText) {
        todos.splice(i, 1);
      }
    }
    //Set new iteem
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  update(oldText, newText) {
    var todos = JSON.parse(localStorage.getItem('todos'));

    for (var i = 0; i < todos.length; i++) {
      if (todos[i].text == oldText) {
          todos[i].text = newText;
      }
    }
    //Set new iteem
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
