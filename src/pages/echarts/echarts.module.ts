import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../modules/index';
import { EchartsPage } from './echarts';

@NgModule({
  declarations: [
    EchartsPage
  ],
  imports: [
    IonicPageModule.forChild(EchartsPage),
    SharedModule
  ],
  entryComponents: [
    EchartsPage
  ],
  providers: [
  ],
  exports: [
    EchartsPage
  ]
})
export class EchartsPageModule {}
