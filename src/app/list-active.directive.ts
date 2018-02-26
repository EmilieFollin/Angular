import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appListActive]'
})
export class ListActiveDirective {

  constructor( private li: ElementRef) {
    this.li.nativeElement.style.backgroundColor = 'powderblue';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBackground('powderblue');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBackground('white');
  }

  setBackground (color) {
    this.li.nativeElement.style.backgroundColor = color;
  }


}


