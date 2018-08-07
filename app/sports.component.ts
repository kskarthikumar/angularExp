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
  `
})
export class SportsComponent implements OnInit {

  myObj:object;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe((data) => {
        this.myObj = data;
          console.log('data is '+this.myObj);
        });
  }

}
