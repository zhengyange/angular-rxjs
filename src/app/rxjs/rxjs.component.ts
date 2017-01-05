import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.less']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.firstDemo();
  }

  firstDemo(): void {
  	const button = document.querySelector('button');
		Observable.fromEvent(button, 'click')
			.subscribe(() => console.log('clicked'))

		const input = document.querySelector('input')
		const search$ = Observable.fromEvent(input, 'input')  
		  .map(e => e['target'].value)
		  .filter(value => value.length >= 1)
		  // .throttleTime(100)
		  // .distinctUntilChanged()
		  // .switchMap(term => Observable.fromPromise(wikiIt(term)))
		  .subscribe(
		    // x => renderSearchResult(x),
		    err => console.log(err)
		  )

  }

}
