import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabylonPage } from './babylon';
import { SharedModule } from '../../modules/index';
import { BabylonProvider } from './../../providers/providers';

@NgModule({
  declarations: [
    BabylonPage
  ],
  imports: [
    IonicPageModule.forChild(BabylonPage),
    SharedModule
  ],
  entryComponents: [
    BabylonPage
  ],
  providers: [
    BabylonProvider
  ],
  exports: [
    BabylonPage
  ]
})
export class BabylonPageModule {}
