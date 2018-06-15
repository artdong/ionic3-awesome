import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  weatherResult: any;
  weather: any;
  weatherImg: string;
  location: {
    city: string
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public weatherProvider: WeatherProvider, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }
  ionViewWillEnter() {
    // 每次进入重新获取
    this.storage.get('location').then(val => {
      if (val != null) {
        this.location = JSON.parse(val);
      }
      else {
        this.location = {
          city: '唐山'
        };
      }
      this.weatherProvider.getWeather(this.location.city).subscribe(result => {
        this.weatherResult = result;
        this.weather = this.weatherResult.result;
        this.weatherImg = 'http://www.moji.com//templets/mojichina/images/weather/weather/w' + this.weather.img + ".png";
      });
    });
  }
  changeCity() {
    let cityBkData = msg => {
      return new Promise((resolve, reject) => {
        if (msg != undefined) {
          resolve(true);
        }
        else {
          reject(Error('error'));
        }
      });
    }
    this.navCtrl.push('ChangecityPage', { 'cityBkData': cityBkData });
  }
}
