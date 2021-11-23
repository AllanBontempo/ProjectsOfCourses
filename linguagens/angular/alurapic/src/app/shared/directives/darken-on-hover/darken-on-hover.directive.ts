import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  @Input() brightness = '70%';


  @HostListener('mouseenter')
  darkenOn() {
    this.renderer.setStyle(this.element.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkenOff() {
    `brightness(${this.brightness})`
    this.renderer.setStyle(this.element.nativeElement, 'filter', 'brightness(100%)')
  }

}
