import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
    <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
    <fieldset ngModelGroup="login">
      <input 
       [(ngModel)]="username" 
       type="text" 
       name="username" 
       required 
       minlength=3 
       #usernameRef="ngModel"
       placeholder="请输入用户名" />
      <div *ngIf="usernameRef.errors?.required">this is required</div>
      <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
      <input 
        [(ngModel)]="password" 
        type="password" 
        name="password" 
        required 
        #passwordRef="ngModel"
        placeholder="请输入密码" />
      <div *ngIf="passwordRef.errors?.required">this is required</div>
      <button type="submit">Submit</button>
    </fieldset>
    </form>
    </div>
  `,
  styles: [`
    input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }
  `],
  //在此处配置服务提供者，即依赖注入服务
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  //在构造函数中将AuthService示例注入到成员变量service中，
  //而且我们不需要显示的声明成员变量service，不需要显示的实例化AuthService
  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }

  onClick(){
    console.log('auth result is ' + this.service.loginWithCredentials(this.username, this.password))
  }

  onSubmit(formValue){
    console.log('auth result is ' + this.service.loginWithCredentials(formValue.login.username, formValue.login.password))
  }
}
