import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeaturePage } from './feature';
import { SharedModule } from '../../modules/index';

@NgModule({
  declarations: [
    FeaturePage
  ],
  imports: [
    IonicPageModule.forChild(FeaturePage),
    SharedModule
  ],
  providers: [
  ]
})
export class FeatureModule {}
