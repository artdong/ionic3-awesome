import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrowserPage } from './browser';

@NgModule({
  declarations: [
    BrowserPage
  ],
  imports: [
    IonicPageModule.forChild(BrowserPage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class BrowserPageModule {}
