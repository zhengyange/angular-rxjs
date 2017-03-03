import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoModule } from './todo/todo.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo.data';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './core/auth.service';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsTrainingComponent } from './rxjs-training/rxjs-training.component';
import { RxjsExtensionsComponent } from './rxjs-extensions/rxjs-extensions.component';
// import { TodoComponent } from './todo/todo.component';
// import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
// import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TypescriptComponent,
    RxjsComponent,
    RxjsTrainingComponent,
    RxjsExtensionsComponent,
    // TodoComponent,
    // TodoFooterComponent,
    // TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    AppRoutingModule,
    TodoModule
  ],
  providers: [
    {provide: 'auth', useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
