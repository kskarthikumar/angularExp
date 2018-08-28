import { Component, OnInit } from '@angular/core';
import { UserService } from './User.service';
import { User } from './User';

@Component({
  template: `
<div *ngIf='myObj?.length > 0; then sportsNews else noContent'></div>
  <ng-template #sportsNews>
  <section class="sportsWrap">
  <section class="newsList" *ngFor = "let sports of myObj">
    <img src="{{sports.image}}" alt="img" />
    <p class="date">{{sports.date}}</p>
    <h1 class="title">{{sports.title}}</h1>
    <article class="desc">{{sports.desc}}</article>
    <span class="like" (click)="likeCount($event.target.innerText)">Like<span class="batch">0</span></span>
    <span class="author">{{sports.author}}</span>
    </section>
    </section>
    </ng-template>
    <ng-template #noContent>
    <h2>Sports News</h2>
    <br>
    <br>
    <p>No news to display!!</p>
    </ng-template>
    <div id="loader" [hidden]="toggleLoader">Loading...</div>
  `
})
export class SportsComponent implements OnInit {

  myObj:object;
  toggleLoader:boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe(
        (data) => {
          if(data != '' && data != null){
            this.toggleLoader = true;
            this.myObj = data;
            console.log('data --> ', this.myObj);
          }
       
        },
        (error) => {
          console.log('Error happened--->', error.message);
        })
  }

}
