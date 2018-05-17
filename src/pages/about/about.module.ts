import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {AboutPage} from "./about";
import {SharedModule} from "../../modules/index";

@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    SharedModule
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class AboutModule {}
