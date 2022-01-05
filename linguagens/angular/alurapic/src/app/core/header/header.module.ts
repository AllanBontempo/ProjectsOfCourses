import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {RouterModule} from "@angular/router";
import {AlertModule} from "../../shared/components/alert/alert.module";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        AlertModule
    ]
})
export class HeaderModule { }
