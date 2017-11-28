import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onHover() { 
   this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }

  constructor(private el: ElementRef) { }

}
