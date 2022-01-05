import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {UserService} from "../../../core/user/user.service";

@Directive({
  selector: '[appShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {


  constructor(
    private elementRef: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) { }

  ngOnInit() {
    !this.userService.isLogged()
      && this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
  }

}
