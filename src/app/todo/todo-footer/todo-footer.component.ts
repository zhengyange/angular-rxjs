import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.less']
})
export class TodoFooterComponent implements OnInit {
	//声明itemCount是一个可输入值，（从引用者处）
	@Input() itemCount: number;

  constructor() { }

  ngOnInit() {
  }

}
