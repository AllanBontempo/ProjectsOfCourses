import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";

import {PhotosModule} from "./photos/photos.module";
import {AppRoutingModule} from "./app.routing.module";
import {ErrorsModule} from "./errors/errors.module";
import {CoreModule} from "./core/core.module";
import {HeaderModule} from "./core/header/header.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    CoreModule,
    HeaderModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
