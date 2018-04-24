import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {QrCodePage} from "./qrcode";
import {SharedModule} from "../../modules/shared.module";

@NgModule({
  declarations: [
    QrCodePage
  ],
  imports: [
    IonicPageModule.forChild(QrCodePage),
    SharedModule
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class QrCodeModule {}
