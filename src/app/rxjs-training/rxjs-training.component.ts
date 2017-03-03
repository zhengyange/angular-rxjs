import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-training',
  templateUrl: './rxjs-training.component.html',
  styleUrls: ['./rxjs-training.component.less']
})
export class RxjsTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	// this.p01();
  	// this.solution02();
  	// this.solution03();

  	// this.p02();
  	// this.p05();
  	// this.p06();
  	// this.p07();
  	// this.p08();
  	this.p09();
  }
  //正常数组循环解决
  p01(): void {
  	console.clear();
		const source: string[] = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

		let result: number = 0;
		let parsedNumber: any;
		for (var i = 0; i < source.length; i++) {
		  parsedNumber = parseInt(source[i]);
		  if (!isNaN(parsedNumber)) {
		    result += parsedNumber;
		  }
		}
		console.log(result);
  }
  //使用数组方法解决
  solution02(): void {
  	console.clear();
  	const source: string[] = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];
  	let result = source
  		.map(x => parseInt(x))
  		.filter(x => !isNaN(x))
  		.reduce((x, y) => x + y)
  	console.log(result)
  } 
  //使用Observable流解决
  solution03(): void {
  	const source: string[] = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];
  	const Ob = Observable.interval(400).take(9)
  		.map(i => source[i])
  	let result = Ob
  		.map(x => parseInt(x))
  		.filter(x => !isNaN(x))
  		.scan((x, y) => {
  			console.log(x, y)
  			return x + y
  		}, 100)

  	result.subscribe(x => console.log(x))
  }

  //问题2 异步操作
  p02(): void {
  	const promise = new Promise((resolve, reject) => {
  		setTimeout(() => {
  			resolve(123)
  		}, 1000)
  		console.log('promise start')
  	})
  	promise.then(x => console.log(x))

  	const observable = Observable.create(function(observer) {
  		setTimeout(function () {
		    console.log('timeout');
		    observer.next(1233333);
		  }, 1000);
  		console.log('observable start')
  	})
  	const subscribtion = observable.subscribe(x => console.log(x))
  	console.log(subscribtion)
  	//在这里做取消订阅
  	setTimeout(() => {
  		subscribtion.complete()
  	}, 500)
  }

  //问题5
  p05(): void {
  	const weightSliderElem = document.querySelector('#weight-slider'); 
		const weightTextElem = document.querySelector('#weight-text');

		const weight = Observable.fromEvent(weightSliderElem, 'input')
			.map(e => e['target'].value)
			.startWith(weightSliderElem['value'])

		weight.subscribe((v) => {
			weightTextElem.innerHTML = v;
		})

  }

  //问题6
  p06(): void {
  	const weightSliderElem = document.querySelector('#weight-slider'); 
		const weightTextElem = document.querySelector('#weight-text');
		const heightSliderElem = document.querySelector('#height-slider'); 
		const heightTextElem = document.querySelector('#height-text');
		const bmiTextElem = document.querySelector('#bmi-text');

		const weight = Observable.fromEvent(weightSliderElem, 'input')
			.map(e => Number(e['target'].value))
			.startWith(weightSliderElem['value'])

		weight.subscribe((v: number) => {
			weightTextElem.innerHTML = String(v);
		})

		const height = Observable.fromEvent(heightSliderElem, 'input')
			.map(e => Number(e['target'].value))
			.startWith(heightSliderElem['value'])

		height.subscribe((v: number) => {
			heightTextElem.innerHTML = String(v);
		})

		//结合两者
		const bmi = Observable.combineLatest(weight, height, (weightKg: number, heightCm: number) => {
			const heightMeters: number = heightCm * 0.01;
    	return weightKg / (heightMeters * heightMeters);
		})

		bmi.subscribe((v: number) => {
			bmiTextElem.innerHTML = String(v)
		})
  }

  p07(): void {
  	const weightSliderElem = document.querySelector('#weight-slider'); 
		const weightTextElem = document.querySelector('#weight-text');
		const heightSliderElem = document.querySelector('#height-slider'); 
		const heightEditTextElem = document.querySelector('#height-edit-text'); 
		const heightTextElem = document.querySelector('#height-text');
		const bmiTextElem = document.querySelector('#bmi-text');

		const weight = Observable.fromEvent(weightSliderElem, 'input')
			.map(e => Number(e['target'].value))
			.startWith(weightSliderElem['value'])

		weight.subscribe((v: number) => {
			weightTextElem.innerHTML = String(v);
		})

		const height = Observable.fromEvent(heightSliderElem, 'input')
			.map(e => Number(e['target'].value))
			.startWith(heightSliderElem['value'])

		height.subscribe((v: number) => {
			heightTextElem.innerHTML = String(v);
		})

		const height2 = Observable.fromEvent(heightEditTextElem, 'input')
			.map(e => parseInt(e['target'].value))
			.startWith(parseInt(heightEditTextElem['value']))

		// const h1andh2 = Observable.merge(height, height2)
		// 	// .map(v = v)
		// 	.subscribe(x => console.log(x))

		//结合两者
		const bmi = Observable.combineLatest(weight, height.merge(height2), 
			(weightKg: number, heightCm: number) => {
				const heightMeters: number = heightCm * 0.01;
	    	// return weightKg / (heightMeters * heightMeters);
	    	return weightKg * heightCm
		})

		bmi.subscribe((v: number) => {
			bmiTextElem.innerHTML = String(v)
		})
  }

  //问题8
  p08(): void {
  	const connectionFailures = Observable.interval(3000).take(2)
  		.map(i => ['Connection pooped', 'Refresh Epic Fail'][i])

  	const renderFailures = Observable.interval(1000).take(3)
  		.map(i => ['Render failed: 309', 'Render failed: 17', 'Nothing rendered'][i]);

		const userActions = Observable.interval(300).take(6)
		  .map(i => ['Clicked', 'Scrolled', 'Clicked', 'Typed', 'Zoomed in', 'Scrolled'][i]);

  	// connectionFailures.subscribe(x => console.log(x))
  	// renderFailures.subscribe(x => console.log(x))
  	// userActions.subscribe(x => console.log(x))
  	const messages = Observable.merge(connectionFailures, renderFailures)
  		.withLatestFrom(userActions, (failure, action) => {
  			return `System failed because of ${failure}, after the user ${action}.`
  		})
  	messages.subscribe(x => console.log(x))
  }

  //问题9
  p09(): void {
  	const clock = Observable
  		.interval(1000)
  		.take(10)
  		.map(x => x + 1)
  		.publish().refCount();
  		
  	setTimeout(() => {
  		clock.subscribe(x => console.log(`     b: ${x}`))
  	}, 4500)
  	clock.subscribe(x => console.log(`a: ${x}`))
  }

}
