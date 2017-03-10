import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Todo } from './todo.model';
// import { TodoService } from './todo.service';

@Component({
  // selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  // providers: [TodoService]
})
export class TodoComponent implements OnInit {
	todos: Todo[] = [];
	desc = '';

  constructor(
    @Inject('todoService') private service,
    // private service: TodoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  	this.getTodos();
    this.route.params.forEach((params: Params) => {
      let filter = params['filter'];
      this.filterTodos(filter);
    })
  }
  filterTodos(filter: string): void{
   this.service
     .filterTodos(filter)
     .then(todos => this.todos = [...todos]);
  }
  addTodo(){
  	this.service.addTodo(this.desc)
  		.then(todo => {
  			this.todos = [...this.todos, todo];
  			this.desc = '';
  		});
  	// this.desc = '';
  }
  toggleTodo(todo: Todo): void {
  	const i = this.todos.indexOf(todo);
  	this.service
  		.toggleTodo(todo)
  		.then(t => {
  			this.todos = [
  				...this.todos.slice(0, i),
  				t,
  				...this.todos.slice(i + 1)
  			]
  		})
  }
  removeTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.service
      .deleteTodoById(todo.id)
      .then(()=> {
        this.todos = [
          ...this.todos.slice(0,i),
          ...this.todos.slice(i+1)
        ];
      });
  }

  getTodos() {
  	this.service.getTodos()
  		.then(todos => {
  			this.todos = [...todos];
  		})
  }
  onTextChanges(value) {
   this.desc = value;
  }
}
