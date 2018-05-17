import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import {ContactDetailPage} from './contact-detail';

@NgModule({
  declarations: [
    ContactDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactDetailPage)
  ],
  exports: [
    ContactDetailPage
  ],
  providers: [
  ]
})
export class ContactDetailModule {
}
