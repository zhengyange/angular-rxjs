import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-rxjs-best',
  templateUrl: './rxjs-best.component.html',
  styleUrls: ['./rxjs-best.component.css']
})
export class RxjsBestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.demot();
  }

  demot(): void {
    var refreshButton = document.querySelector('.refresh');
    var close1Button = document.querySelector('.close1');
    
    var refreshClickStream = Observable.fromEvent(refreshButton, 'click');
    var close1ClickStream = Observable.fromEvent(close1Button, 'click');


    var requestStream = refreshClickStream
    .startWith('startup click')     // 默认会执行一次
    .merge(close1ClickStream)
    .map(function(start) {
        var randomOffset = Math.floor(Math.random()*500);
        return 'https://api.github.com/users?since=' + randomOffset;
    });
    function getJSON(requestUrl: string): any{
      return new Promise((resolve, rject) => {
        jQuery.getJSON(requestUrl, (responseData) => {
          resolve(responseData)
        })
      })
    }
    var responseStream = requestStream
    .flatMap(function (requestUrl) {
        return Observable.fromPromise(getJSON(requestUrl));
    });

    // 推荐用户一
    var suggestion1Stream = close1ClickStream
      .startWith('startup click')
      .combineLatest(responseStream,             
        function(click, listUsers: Array<any>) {
          return listUsers[Math.floor(Math.random()*listUsers.length)];
        }
      )
      .merge(
        refreshClickStream.map(function(){ return null; })
      )
      .startWith(null)

    // 推荐用户一
    var suggestion2Stream = responseStream
      .map(function(listUsers: Array<Object>){
        return listUsers[Math.floor(Math.random()*listUsers.length)];
      })

    // 推荐用户一
    var suggestion3Stream = responseStream
      .map(function(listUsers: Array<Object>){
        return listUsers[Math.floor(Math.random()*listUsers.length)];
      })
    function renderSuggestion(suggestedUser, selector) {
      var suggestionEl = document.querySelector(selector);
      if (suggestedUser === null) {
          suggestionEl.style.visibility = 'hidden';
      } else {
          suggestionEl.style.visibility = 'visible';
          var usernameEl = suggestionEl.querySelector('.username');
          // console.log(usernameEl.getAttribute('href'))
          // usernameEl.href = suggestedUser.html_url;
          usernameEl.setAttribute('href', suggestedUser.html_url);
          usernameEl.textContent = suggestedUser.login;
          var imgEl = suggestionEl.querySelector('img');
          imgEl.src = "";
          imgEl.src = suggestedUser.avatar_url;
      }
    }
    suggestion1Stream.subscribe(function(suggestedUser: Object){
      renderSuggestion(suggestedUser, '.suggestion1');
    })
    suggestion2Stream.subscribe(function(suggestedUser: Object){
      renderSuggestion(suggestedUser, '.suggestion2');
    })
    suggestion3Stream.subscribe(function(suggestedUser: Object){
      renderSuggestion(suggestedUser, '.suggestion3');
    })
  }

}
