import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IonicPage} from "ionic-angular";

@IonicPage({name: 'tabs-feature'})
@Component({
  selector: 'page-feature',
  templateUrl: 'feature.html'
})
export class FeaturePage {

  constructor(public navCtrl: NavController) {

  }

  goToQrcode() {
    this.navCtrl.push('page-qrcode');
  }
}
