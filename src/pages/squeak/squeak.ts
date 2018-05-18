import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {IonicPage} from "ionic-angular";
import {Clipboard} from "@ionic-native/clipboard";
import {Utils} from "../../common/utils";

@IonicPage({name: 'squeak'})
@Component({
  selector: 'page-squeak',
  templateUrl: 'squeak.html'
})
export class SqueakPage {
  selectedTheme: String;

  constructor(public navCtrl: NavController, private clipboard: Clipboard) {
  }

  ionViewWillEnter() {

  }

  ionViewWillLeave() {
    this.clipboard.copy('');
  }

  getSqueak() {
    this.clipboard.paste().then(
      (resolve: string) => {
        if (resolve && resolve != '') {
          if (Utils.isValidateUrl(resolve)) {
            let browser = {
              title: '百度',
              url: resolve
            };
            this.navCtrl.push('browser', {browser: browser});
          } else {
            alert(resolve);
          }
        }
      },
      (reject: string) => {
        // alert('Error: ' + reject);
      }
    );
  }

  generateSqueak() {
    let num = Math.floor(Math.random() * 10);
    if (num % 3 == 0) {
      this.clipboard.copy('我就是你想要的口令');
      alert('生成的吱口令: ' + '我就是你想要的口令');
    }
    if (num % 3 == 1) {
      this.clipboard.copy('http://www.baidu.com');
      alert('生成的吱口令: ' + 'http://www.baidu.com');
    }
    if (num % 3 == 2) {
      this.clipboard.copy('hello, baby!');
      alert('生成的吱口令: ' + 'hello, baby!');
    }
  }
}
