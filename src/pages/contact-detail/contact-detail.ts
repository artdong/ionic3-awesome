import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
@IonicPage({name: 'contact-detail'})

@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html'
})
export class ContactDetailPage {
  item: any;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.item = navParams.get('item');
  }
}
