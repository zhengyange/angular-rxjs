import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works! you do not see it?';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(){
  }
}
