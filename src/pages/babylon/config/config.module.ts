import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigPage } from './config';

@NgModule({
  declarations: [
    ConfigPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigPage),
  ],
  providers: [
  ],
  exports: [
    ConfigPage
  ]
})
export class ConfigPageModule {}
