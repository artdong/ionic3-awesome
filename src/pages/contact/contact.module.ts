import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import {ContactPage} from './contact';
import {AlphaListModule} from "../../modules/index";

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    AlphaListModule
  ],
  exports: [
    ContactPage
  ],
  providers: [
  ]
})
export class ContactPageModule {
}
