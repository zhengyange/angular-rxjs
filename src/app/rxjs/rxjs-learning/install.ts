import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const arr = Observable.of(1, 2, 3);
console.log(arr);
const arr2 = arr.map( x => {
	return x + '111'
})
console.log(arr2)

const button = document.querySelector('button');
Observable.fromEvent(button, 'click')
	.subscribe(() => console.log('clicked'))


