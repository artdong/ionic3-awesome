import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SqueakPage} from "./squeak";

@NgModule({
  declarations: [
    SqueakPage
  ],
  imports: [
    IonicPageModule.forChild(SqueakPage),
  ],
  providers: [
  ]
})
export class HomeModule {}
