import { Component, OnInit } from '@angular/core';
import { TagServiceService } from './tag-service.service';

@Component({
    templateUrl: './headlines.component.html'
})
export class HeadlinesComponent { 
  img: string = 'images';
  center: number = 2;
 constructor (private tagService : TagServiceService) {}

  headlinesArray;
  ngOnInit(){
    this.headlinesArray = this.tagService.tags();
  }

}
