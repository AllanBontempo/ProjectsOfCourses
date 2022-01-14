import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LikeWidgetComponent} from './like-widget.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    LikeWidgetComponent
  ],
  exports: [
    LikeWidgetComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class LikeWidgetModule {
}
