import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ContactPage } from './contact';
import { AlphaListModule } from '../../modules/index';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    PipesModule,
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
