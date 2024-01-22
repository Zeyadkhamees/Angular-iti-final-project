import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderStyleDirective implements OnChanges {


  @Input() increaseBorder:string="60px";
  @Input() decreaseBorder:string="10px";

  @Input() increaseShadow:string="15px 15px";
  @Input() decreaseShadow:string="5px 5px";

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.borderRadius="10px";
    this.element.nativeElement.style.boxShadow="5px 5px";
  }
  ngOnChanges(): void {
    this.element.nativeElement.style.borderRadius = `${this.decreaseBorder}`
    this.element.nativeElement.style.boxShadow = `${this.decreaseShadow}`
  }

  @HostListener('mouseover') handle(){
    this.element.nativeElement.style.borderRadius = `${this.increaseBorder}`
    this.element.nativeElement.style.boxShadow = `${this.increaseShadow}`
  }

  @HostListener('mouseout') handle2(){
    this.element.nativeElement.style.borderRadius = `${this.decreaseBorder}`
    this.element.nativeElement.style.boxShadow = `${this.decreaseShadow}`
  }

}
