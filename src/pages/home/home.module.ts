import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { QQSDK } from '@ionic-native/qqsdk';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [
    HomePage
  ],
  providers: [
    QQSDK
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule {}
