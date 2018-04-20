import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {AboutPage} from "./about";

@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
  ],
  providers: [
  ]
})
export class AboutModule {}
