import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {IonicPage} from "ionic-angular";
import {ThemeService} from "../../providers/theme/theme.service";

@IonicPage({name: 'tabs-home'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedTheme: String;

  constructor(public navCtrl: NavController, private themeService: ThemeService) {
    // 获取当前主题
    this.themeService.getActiveTheme().subscribe(val => this.selectedTheme = val);
    console.log('this.selectedTheme: ' + this.selectedTheme);
  }

  goToQrcode() {
    this.navCtrl.push('page-qrcode');
  }

  changeTheme() {
    console.log('changeTheme: ' + this.selectedTheme);
    if (this.selectedTheme === 'dark-theme') {
      // 改变
      this.themeService.setActiveTheme('light-theme');
      console.log('curTheme: ' + 'light-theme');
    } else {
      this.themeService.setActiveTheme('dark-theme');
      console.log('curTheme: ' + 'dark-theme');
    }
  }

  goToGrid9() {
    this.navCtrl.push('tabs-feature');
  }

  goContact() {
    this.navCtrl.push('contact');
  }

  goSqueak() {
    this.navCtrl.push('squeak');
  }
}
