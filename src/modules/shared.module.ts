import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QrCodeComponent} from "./components/index";

@NgModule({
  declarations: [
    QrCodeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QrCodeComponent
  ],
  entryComponents: [
    QrCodeComponent
  ],
  providers: [
  ]
})
export class SharedModule {}
