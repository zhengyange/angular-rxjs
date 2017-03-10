import { Component, OnInit, Inject } from '@angular/core';

// 测试
import '../car/car'

@Component({
  selector: 'app-testcom',
  template: `
    <div>
    <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef)">
    <fieldset ngModelGroup="login">
      <input name="username" [(ngModel)]="username" type="text" #usernameRef="ngModel" required minlength="3" />
      {{ usernameRef.errors | json }}
      <div *ngIf="usernameRef.errors?.required">this is required</div>
      <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
      <input name="userpassword" [(ngModel)]="password" type="password" #userpasswordRef="ngModel" required />
      {{ userpasswordRef.errors | json }}
      <button type="submit">Login</button>
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
  // 必须要在providers中配置service
  // providers: [ AuthtestService]
})
export class TestcomComponent implements OnInit {
  private username: string;
  private password: string;
  // 使用简写语法，
  constructor(@Inject('authtest') private service) { }

  ngOnInit() {
   
  }

  onClick(){
    console.log('Auth result is ', this.service.loginWithCredentials(this.username, this.password))
  }

  onSubmit(formValue): void {
    console.log('Auth result is ', this.service.loginWithCredentials(formValue.login.username, formValue.login.password));
  }

}
