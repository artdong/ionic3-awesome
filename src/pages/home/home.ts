import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IonicPage} from "ionic-angular";

@IonicPage({name: 'tabs-home'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
