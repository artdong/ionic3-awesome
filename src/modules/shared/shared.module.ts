import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { QrCodeComponent, Grid9Component, CToastComponent, CModalComponent } from './components/index';

@NgModule({
  declarations: [
    QrCodeComponent,
    Grid9Component,
    CToastComponent,
    CModalComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    QrCodeComponent,
    Grid9Component,
    CToastComponent,
    CModalComponent
  ],
  entryComponents: [
    CToastComponent,
    CModalComponent
  ],
  providers: [
  ]
})
export class SharedModule {}
