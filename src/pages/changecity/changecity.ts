import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WeatherProvider } from '../../providers/weather/weather';

/**
 * Generated class for the ChangecityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changecity',
  templateUrl: 'changecity.html',
})
export class ChangecityPage {
  city: string;
  cityBkData: any;
  cityColumns: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public weatherProvider: WeatherProvider) {
    this.storage.get('location').then(val => {
      if (val != null) {
        let location = JSON.parse(val);
        this.city = location.city;
      }
      else {
        this.city = '唐山';
      }
    });
    this.cityBkData = this.navParams.get('cityBkData');
    this.cityColumns = weatherProvider.citys;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangecityPage');
  }

  saveForm() {
    let location = {
      city: this.city
    };
    this.cityBkData(this.city).then(
      result => {
        this.navCtrl.pop();
      },
      err => {
        console.log(err);
      }
    );
    this.storage.set('location', JSON.stringify(location));
  }

  saveCitySelect() {
    let location = {
      city: this.city
    };
    let isSave = false;

    let cityArr = document.getElementById('cities').innerText;
    if (cityArr) {
      let cityTmp = cityArr.split('-');
      if (cityTmp[2] && cityTmp[2] != '市辖区') {
        location.city = cityTmp[2];
        isSave = true;
      }
    }
    if (isSave) {
      this.cityBkData(this.city).then(
        result => {
          this.navCtrl.pop();
        },
        err => {
          console.log(err);
        }
      );
      this.storage.set('location', JSON.stringify(location));
    }
  }
}
