### 相关命令
```bash
# 生成内联模板
$ ng g c login -it -is

```

```javascript
import { Component, OnInit } from '@angular/core';
// @Component，是Angular提供的装饰器函数，用来描述Component的元数据
// 其中selector是指这个组件在html中的标签是什么
// template: 是嵌入的html模板，单独文件使用templateUrl
// styles: 是嵌入的css样式，单独文件使用styleUrl

@Component({
  selector: 'app-login',
  template: `
    <p>
      login Works!
    </p>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// bootstrap 指明哪个组件为引导性组件
```

```javascript
@Component({
  selector: 'app-testcom',
  template: `
    <div>
      <input #usernameRef type="text" />
      <button (click)="onClick(usernameRef.value)">Login</button>
    </div>
  `,
  styles: []
})
// (click)表示我们要处理这个button的click事件
// 圆括号是说发生事件时，调用等号后面的函数或表达式
// #usernameRef表示引用
```
    通常会把服务的提供商添加到根模块上，即providers数组，以便在任何地方都可以使用服务的同一个实例，  
    当然在组件上@Component，也可以注册提供商，注册在组件级表示组件的每一个新实例，都会有一个服务的新实例

### `[(ngModel)]="username"`
说明：
    - []方括号的作用是说把等号后面当成表达式解析而不当成字符串，
    - []方括号的作用是单向数据绑定，就是说我们在组件中给ngModel赋的值会设置到html的input控件中，  
    - [()]的作用是双向数据绑定，就是说html对应控件的状态的改变会反射设置到组件的model中，
    - ngModel是FormModule中提供的指令，它负责从组件model中创建一个FormControl的实例，并将这个控件和表单的实例绑定起来

### `*ngIf="usernameRef.errors?.required"`
    - ?的作用，是指当errors为空，就不调用后面的属性了，避免报错

### `<base href="/">`
    一般放在header的最前端，浏览器会根据这个路径下载css\js\image等资源

### 路由
    - 先匹配优先的原则，只匹配第一个匹配的结果

### 依赖注入
```javascript
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  constructor(
    // @Inject('todoService') private service,
    private service: TodoService,
}

// 带有装饰器的类，往构造函数中添加参数，并不仅仅是添加参数，它不能全部代表这里发生的一切
// 往构造函数里，添加参数，并不是这里所发生的一切
// @Component装饰器和providers合起来告诉angular注入器，在新建组件的时候，注入一个TodoSevice实例，注意是实例，并且是单例
// 构造函数的参数的 'TodoSevice'类型，应该是用于注入器判断将TodoService实例赋值给哪个参数，例如private

// 为什么要用[...arr]，而不用push，因为前者构造出来的数组是全新的，而后者是对原数组的引用
```

### 泛型
  - T: 类型变量，特殊的变量，只用表示类型而不是值


### http注入
    