import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import {QrCodeComponent, Grid9Component, CToastComponent} from "./components/index";

@NgModule({
  declarations: [
    QrCodeComponent,
    Grid9Component,
    CToastComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    QrCodeComponent,
    Grid9Component,
    CToastComponent
  ],
  entryComponents: [
    CToastComponent
  ],
  providers: [
  ]
})
export class SharedModule {}
