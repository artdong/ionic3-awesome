import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'ion-grid9',
  templateUrl: 'grid9.html'
})
export class Grid9Component {
  @Input() data;
  @Input() showTitle;

  constructor(private navCtrl: NavController) {
  }

  detail(module) {
    console.log('module: ' + JSON.stringify(module));
    if (!module.link) {
      return;
    }
    if (!module.isThirdParty) {
      this.navCtrl.push(module.link, {item: module});
      return;
    } else {
      let browser = {
        title: module.name,
        url: module.link
      };
      this.navCtrl.push('browser', { browser });
    }
  }
}
