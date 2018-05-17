import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import {QrCodeComponent} from "./components/index";
import {Grid9Component} from "./components/grid9/grid9";

@NgModule({
  declarations: [
    QrCodeComponent,
    Grid9Component
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    QrCodeComponent,
    Grid9Component
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class SharedModule {}
