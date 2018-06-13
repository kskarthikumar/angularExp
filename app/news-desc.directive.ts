import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewsDesc]'
})
export class NewsDescDirective {

  constructor(ev: ElementRef) {
    ev.nativeElement.style.textAlign = "left";
    ev.nativeElement.style.marginBottom = "40px";
    ev.nativeElement.style.color = "#727f88";
   }

  

}
