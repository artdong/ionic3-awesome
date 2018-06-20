import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

/**
 * Generated class for the FingerprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fingerprint',
  templateUrl: 'fingerprint.html',
})
export class FingerprintPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad FingerprintPage');
  }
  isToggled: Boolean = false;

  constructor(public navCtrl: NavController, private faio: FingerprintAIO, public alertCtrl: AlertController) {
  }

  show() {
    this.faio.isAvailable().then(result => {
      this.faio.show({
        clientId: 'Fingerprint-awesome',
        clientSecret: 'password', //Only necessary for Android
        disableBackup: true,  //Only for Android(optional)
        localizedFallbackTitle: '指纹认证', //Only for iOS
        localizedReason: '输入指纹' //Only for iOS
      }).then((result: any) => {
        this.navCtrl.pop();
      }).catch((error: any) => {
        let alert = this.alertCtrl.create({
          title: '错误',
          subTitle: error,
          buttons: ['关闭']
        });
        alert.present();
        this.isToggled = false;
      });
    }).catch(err => {
      let alert = this.alertCtrl.create({
        title: '错误',
        subTitle: '本机不支持指纹认证',
        buttons: ['关闭']
      });
      alert.present();
      this.isToggled = false;
    });

  }
  nofity() {
    if (this.isToggled) {
      this.show();
    }
  }
  logIn(username: any, password: any) {
    this.navCtrl.pop();
  }
}
