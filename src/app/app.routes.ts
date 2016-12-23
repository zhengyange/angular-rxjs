import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'typescript', component: TypescriptComponent},
	{path: 'todo', redirectTo: 'todo/ALL'},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}