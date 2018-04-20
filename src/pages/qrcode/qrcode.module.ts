import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {QrCodePage} from "./qrcode";
import {QrCodeComponent} from "../../components/qrcode/qrcode";

@NgModule({
  declarations: [
    QrCodePage,
    QrCodeComponent
  ],
  imports: [
    IonicPageModule.forChild(QrCodePage)
  ],
  entryComponents: [
    QrCodeComponent
  ],
  providers: [
  ]
})
export class QrCodeModule {}
