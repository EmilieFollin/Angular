import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appListActive]'
})
export class ListActiveDirective {

  constructor( private li: ElementRef) {
    this.li.nativeElement.style.backgroundColor = 'tomato';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBackground('dimgray');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBackground('tomato');
  }

  setBackground (color) {
    this.li.nativeElement.style.backgroundColor = color;
  }


}


