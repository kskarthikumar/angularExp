import { Injectable } from '@angular/core';

@Injectable()
export class TagServiceService {

  headlineNews: any[] = [
    {date: 'Today', title: 'Headelines news title one', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', author : 'Admin one', image: 'img1.jpg'},
    {date: 'Today', title: 'Headelines news title two', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', author : 'News editor', image: 'img2.jpg'},
    {date: 'yesterday', title: 'Headelines news title three', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', author : 'Admin two', image: 'img3.jpg'}
  ];

  constructor() { }

  tags() {
    return this.headlineNews;
  }
}
