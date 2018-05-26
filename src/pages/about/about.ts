import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IonicPage} from "ionic-angular";

@IonicPage({name: 'tabs-about'})
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
}
