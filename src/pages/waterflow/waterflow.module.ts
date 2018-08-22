import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterflowPage } from './waterflow';

@NgModule({
  declarations: [
    WaterflowPage
  ],
  imports: [
    IonicPageModule.forChild(WaterflowPage),
  ],
  entryComponents: [
    WaterflowPage
  ],
  providers: [
  ],
  exports: [
    WaterflowPage
  ]
})
export class AboutModule {}
