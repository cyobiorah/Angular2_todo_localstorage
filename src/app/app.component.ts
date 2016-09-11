import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import {TodosService } from './todos.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [TodosService],
  directives: [TodosComponent]
})

export class AppComponent {
  title = "app works";

}
