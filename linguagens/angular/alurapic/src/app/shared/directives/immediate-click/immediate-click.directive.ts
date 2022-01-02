import {Directive, ElementRef, OnInit} from '@angular/core';
import {PlatformDetectorService} from "../../../core/platform-detector/platform-detector.service";

@Directive({
  selector: '[appImmediateClick]'
})
export class ImmediateClickDirective implements OnInit{

  constructor(
    private elementRef: ElementRef<any>,
    private platformDetector: PlatformDetectorService
  )
  {  }

  ngOnInit() {
    this.platformDetector.isPlatformBrowser() && this.elementRef.nativeElement.click();
  }

}
