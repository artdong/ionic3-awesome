import { BabylonConfigProvider } from './../../../providers/providers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Class for the ConfigPage page.
 */
@IonicPage({name: 'page-babylon-config'})
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  public colors;
  public colorOne: number;
  public colorTwo: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private config: BabylonConfigProvider) {
  }

  ionViewDidLoad() {
    this.colors = this.config.colors;
    this.colorOne = this.config.colorOne;
    this.colorTwo = this.config.colorTwo;
  }

  onChangeOne(c) {
    if (c !== this.config.colorOne) {
      this.config.colorOne = c;
      this.config.hasChanged = true;
    }
  }

  onChangeTwo(c) {
    if (c !== this.config.colorTwo) {
      this.config.colorTwo = c;
      this.config.hasChanged = true;
    }
  }
}
