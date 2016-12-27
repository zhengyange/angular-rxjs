import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.less']
})
//类类型，TypescriptComponent类，会被强制定义符合OnInit类的约定
//此处，即是必须实现ngOnInit方法
export class TypescriptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	// let x: number | undefined;
  	// x = undefined;
  }

}

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date): void {
    this.currentTime = d;
  }
}

//给接口定义调用签名
// interface SearchFun {
//   //调用签名
//   (source: string, subString: string): boolean;
// }


// interface LabelValue {
//   label: string;
// }

// function printLabel(labelObj: LabelValue){
//   console.log(labelObj.label)
// }

// let myObj = { size: 10, label: 'size 10 obj'};

// printLabel(myObj)

// function fn() {
  // a++;
  // let a: number = 0; 
  // console.log(a)
// }
// let a: number = 0;
// fn();

//const变量的内部状态是可以改变的
// const arr: number[] = [1, 2, 3];
// arr[2] = 1;
// let b: ReadonlyArray<number> = [1];

//let不仅是在循环体里引入一个新的环境变量，而是针对每次迭代都会创建这样一个新的作用域
// for (let i: number = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }

// let someValue: any = 'This is a string';
// let someValue: any = 10;
// let length: number = (<string>someValue).length;
// let length: number = 0;
// length = (someValue as string).length;
// length = someValue.length;
// console.log(length)

// function warnUser(): void {
//   console.log(111111)
// }

// enum Color { Red, Green, Blue};
// let c: Color = Color.Red;
// console.log(c)


// //元组类型
// let x: [string, number] = ['data', 100];
// console.log(x)

//在元素类型后面加上'[]'，表示由此类型元素组成的数组
// let list: number[] = [1, 2, 3];

//使用数组泛型 Array<元素类型>
// let list1: Array<number> = [3 ,4 ,5];

// function f(this: void, b){
// 	console.log(this)
// 	console.log(b)
// }

// f('aa');

// class Foo {
// 	readonly a: number = 1;
// 	readonly b: string = '';
// 	constructor(){
// 		this.b = '111111';
// 	}
// }


// interface Point {
// 	readonly x: number;
// 	readonly y: number;
// }

// var p1: Point = { x: 1, y: 10 };
// // p1.x = 5;

// var p2 = { x: 1, y: 1};
// var p3: Point = p2;

// p2.x = 5;
// console.log(p3.x)