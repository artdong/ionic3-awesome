import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../../modules/index';
import { EchartPiePage } from './echart-pie';

@NgModule({
  declarations: [
    EchartPiePage
  ],
  imports: [
    IonicPageModule.forChild(EchartPiePage),
    SharedModule
  ],
  entryComponents: [
    EchartPiePage
  ],
  providers: [
  ],
  exports: [
    EchartPiePage
  ]
})
export class AboutModule {}
