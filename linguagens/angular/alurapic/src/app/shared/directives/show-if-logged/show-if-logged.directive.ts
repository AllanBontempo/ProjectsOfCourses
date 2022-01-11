import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {UserService} from "../../../core/user/user.service";

@Directive({
  selector: '[appShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  currentDisplay!: string;

  constructor(
    private elementRef: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {
  }

  ngOnInit() {

    this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display;
    this.userService.getUser()
      .subscribe(user => {
        if (user) {
          this.renderer.setStyle(this.elementRef.nativeElement, 'display', this.currentDisplay);
        } else {
          this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display;
          this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
        }
      });
  }

}
