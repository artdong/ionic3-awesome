import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'c-modal',
  templateUrl: 'c-modal.html'
})
export class CModalComponent {
  params;

  navTargets = [];

  constructor(private navParams: NavParams,
              // private navCtrl: NavController,
              private view: ViewController) {
  }

  ionViewWillEnter() {
    this.navTargets = [{
        'navigationDockTargetMapId': 1,
        'navigationDockId': 1,
        'navigationTargetId': 1,
        'navigationTargetName': '微信',
        'navigationTargetImagePath': 'ios-analytics-outline',
        'navigationTargetLink': 'device-livepoint',
        'navigationTargetParams': 'deviceId',
        'navigationTargetVisible': true,
        'navigationTargetDescription': '微信'
      }, {
        'navigationDockTargetMapId': 2,
        'navigationDockId': 1,
        'navigationTargetId': 2,
        'navigationTargetName': '朋友圈',
        'navigationTargetImagePath': 'ios-clipboard-outline',
        'navigationTargetLink': 'device-install-log',
        'navigationTargetParams': 'deviceId',
        'navigationTargetVisible': true,
        'navigationTargetDescription': '朋友圈'
      }, {
        'navigationDockTargetMapId': 3,
        'navigationDockId': 1,
        'navigationTargetId': 3,
        'navigationTargetName': 'QQ',
        'navigationTargetImagePath': 'ios-clipboard-outline',
        'navigationTargetLink': 'maintenance-info',
        'navigationTargetParams': 'deviceId',
        'navigationTargetVisible': true,
        'navigationTargetDescription': 'QQ'
      }, {
      'navigationDockTargetMapId': 4,
      'navigationDockId': 1,
      'navigationTargetId': 4,
      'navigationTargetName': 'QQ空间',
      'navigationTargetImagePath': 'ios-clipboard-outline',
      'navigationTargetLink': 'repair-record',
      'navigationTargetParams': 'deviceId',
      'navigationTargetVisible': true,
      'navigationTargetDescription': 'QQ空间'
    }, {
      'navigationDockTargetMapId': 5,
      'navigationDockId': 1,
      'navigationTargetId': 4,
      'navigationTargetName': '微博',
      'navigationTargetImagePath': 'ios-clipboard-outline',
      'navigationTargetLink': 'repair-record',
      'navigationTargetParams': 'deviceId',
      'navigationTargetVisible': true,
      'navigationTargetDescription': '微博'
    }, {
      'navigationDockTargetMapId': 6,
      'navigationDockId': 1,
      'navigationTargetId': 4,
      'navigationTargetName': '易信',
      'navigationTargetImagePath': 'ios-clipboard-outline',
      'navigationTargetLink': 'repair-record',
      'navigationTargetParams': 'deviceId',
      'navigationTargetVisible': true,
      'navigationTargetDescription': '易信'
    }, {
      'navigationDockTargetMapId': 7,
      'navigationDockId': 1,
      'navigationTargetId': 4,
      'navigationTargetName': '复制',
      'navigationTargetImagePath': 'ios-clipboard-outline',
      'navigationTargetLink': 'repair-record',
      'navigationTargetParams': 'deviceId',
      'navigationTargetVisible': true,
      'navigationTargetDescription': '复制'
    }];
  }

  cancel() {
    this.view.dismiss();
  }
}
