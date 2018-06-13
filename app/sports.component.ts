import { Component } from '@angular/core';

@Component({
  template: `
  <div *ngIf='sports?.length > 0; then sportsNews else noContent'></div>
  <ng-template #sportsNews>
  <section class="sportsWrap">
  <h2>sports in city</h2>
  <section class="newsList" *ngFor = "let sports of sportsNews">
    <img src="../assets/{{sports.image}}" alt="img" />
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
export class SportsComponent {
  sports: any[] = [];

 }
