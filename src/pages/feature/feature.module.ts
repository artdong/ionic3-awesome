import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FeaturePage} from "./feature";

@NgModule({
  declarations: [
    FeaturePage
  ],
  imports: [
    IonicPageModule.forChild(FeaturePage),
  ],
  providers: [
  ]
})
export class FeatureModule {}
