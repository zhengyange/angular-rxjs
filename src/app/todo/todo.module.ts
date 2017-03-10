import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo.routes'

import { TodoComponent } from './todo.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoService } from './todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoTestComponent } from './todo-test/todo-test.component';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		TodoRoutingModule
	],
	declarations: [
		TodoComponent,
		TodoFooterComponent,
		TodoHeaderComponent,
		TodoItemComponent,
		TodoListComponent,
		TodoTestComponent
	],
	providers: [
		{provide: 'todoService', useClass: TodoService}
	]
})
export class TodoModule {}



