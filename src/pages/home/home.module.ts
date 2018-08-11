import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { QQSDK } from '@ionic-native/qqsdk';
import { SharedModule } from '../../modules/index';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SharedModule
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
