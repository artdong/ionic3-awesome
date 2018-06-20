import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FingerprintPage } from './fingerprint';

@NgModule({
  declarations: [
    FingerprintPage,
  ],
  imports: [
    IonicPageModule.forChild(FingerprintPage),
  ],
})
export class FingerprintPageModule {}
