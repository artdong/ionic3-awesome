import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { QrCodeComponent, Grid9Component, CToastComponent, CModalComponent } from './components/index';
import { CModalRightComponent } from './components/c-modal-right/c-modal-right';

@NgModule({
  declarations: [
    QrCodeComponent,
    Grid9Component,
    CToastComponent,
    CModalComponent,
    CModalRightComponent
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
    CModalComponent,
    CModalRightComponent
  ],
  providers: [
  ]
})
export class SharedModule {}
