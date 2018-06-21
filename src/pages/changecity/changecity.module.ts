import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangecityPage } from './changecity';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    ChangecityPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangecityPage),
    MultiPickerModule
  ],
})
export class ChangecityPageModule {
}
