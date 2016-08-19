import {Component, OnInit} from '@angular/core';
import {TodosService } from "../todos.service";

@Component({
  moduleId: module.id,
  selector: 'app-todo',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],
  providers: [TodosService]
})

export class TodosComponent implements OnInit {
  private todos;
  private fbTodos
  private text;
  private oldText;
  appState = 'default';
  response: string;

  // Pass Firebase service to the constructor
  // constructor(private _firebaseService: FirebaseService) { }
  constructor(private _todoServce: TodosService) { }
  //On app load display this
  ngOnInit() {
    this.todos = this._todoServce.getTodos();
    // this.fbTodos = this._firebaseService.getTodo();
  }
  
  //Add todos
  addTodo() {
    var newTodo = {
      text: this.text
    }
    console.log(newTodo);
    this.todos.push(newTodo);
    this._todoServce.addTodo(newTodo)
  }

  deleteTodo(todoText) {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == todoText) {
        this.todos.splice(i, 1);
      }
    }
    // this.deleteTodoFirebase(todoText);
    this._todoServce.deleteItem(todoText);
  }

  // deleteTodoFirebase(todoText) {
  //   for (var i = 0; i < this.fbTodos.length; i++) {
  //     if (this.fbTodos[i].text == todoText) {
  //       this.fbTodos.splice(i, 1);
  //     }
  //   }
  // }

  editTodo(todo) {
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }

  updateTodo() {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == this.oldText) {
        this.todos[i].text = this.text;
      }
    }
    this._todoServce.update(this.oldText, this.text);
    this.text = '';
  }

  changeToDefault() {
    this.appState = 'default';
  }
}
