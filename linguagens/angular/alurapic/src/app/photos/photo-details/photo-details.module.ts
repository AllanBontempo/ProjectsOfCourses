import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotoDetailsComponent} from './photo-details.component';
import {PhotoModule} from "../photo/photo.module";
import {PhotoCommentsModule} from "./photo-comments/photo-comments.module";
import {PhotoOwnerOnlyDirective} from './photo-owner-only/photo-owner-only.directive';
import {ShowIfLoggedModule} from "../../shared/directives/show-if-logged/show-if-logged.module";


@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoOwnerOnlyDirective,
  ],
  imports: [
    CommonModule,
    PhotoModule,
    PhotoCommentsModule,
    ShowIfLoggedModule
  ]
})
export class PhotoDetailsModule {
}
