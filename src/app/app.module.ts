import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoModule } from './todo/todo.module';
import { SysStoreModule } from './sys-store/sys-store.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo.data';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './core/auth.service';
import { AuthtestService } from './core/authtest.service';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsTrainingComponent } from './rxjs-training/rxjs-training.component';
import { RxjsExtensionsComponent } from './rxjs-extensions/rxjs-extensions.component';
import { RxjsBestComponent } from './rxjs-best/rxjs-best.component';
import { TestcomComponent } from './testcom/testcom.component';
// import { SysStoreComponent } from './sys-store/sys-store.component';
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
    RxjsBestComponent,
    TestcomComponent,
    // SysStoreComponent,
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
    TodoModule,
    SysStoreModule
  ],
  providers: [
    {provide: 'auth', useClass: AuthService},
    {provide: 'authtest', useClass: AuthtestService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
