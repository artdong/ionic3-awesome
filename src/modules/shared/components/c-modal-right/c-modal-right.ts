import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'c-modal-right',
  templateUrl: 'c-modal-right.html'
})
export class CModalRightComponent {
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
        'navigationTargetImagePath': 'ios-chatbubbles',
        'navigationTargetLink': 'device-livepoint',
        'navigationTargetParams': 'deviceId',
        'navigationTargetVisible': true,
        'navigationTargetDescription': '微信'
      }, {
        'navigationDockTargetMapId': 2,
        'navigationDockId': 1,
        'navigationTargetId': 2,
        'navigationTargetName': '朋友圈',
        'navigationTargetImagePath': 'md-aperture',
        'navigationTargetLink': 'device-install-log',
        'navigationTargetParams': 'deviceId',
        'navigationTargetVisible': true,
        'navigationTargetDescription': '朋友圈'
      }, {
        'navigationDockTargetMapId': 3,
        'navigationDockId': 1,
        'navigationTargetId': 3,
        'navigationTargetName': 'QQ',
        'navigationTargetImagePath': 'md-happy',
        'navigationTargetLink': 'maintenance-info',
        'navigationTargetParams': 'deviceId',
        'navigationTargetVisible': true,
        'navigationTargetDescription': 'QQ'
      }, {
      'navigationDockTargetMapId': 4,
      'navigationDockId': 1,
      'navigationTargetId': 4,
      'navigationTargetName': 'QQ空间',
      'navigationTargetImagePath': 'md-globe',
      'navigationTargetLink': 'repair-record',
      'navigationTargetParams': 'deviceId',
      'navigationTargetVisible': true,
      'navigationTargetDescription': 'QQ空间'
    }, {
      'navigationDockTargetMapId': 5,
      'navigationDockId': 1,
      'navigationTargetId': 4,
      'navigationTargetName': 'github',
      'navigationTargetImagePath': 'logo-github',
      'navigationTargetLink': 'repair-record',
      'navigationTargetParams': 'deviceId',
      'navigationTargetVisible': true,
      'navigationTargetDescription': 'github'
    }, {
      'navigationDockTargetMapId': 6,
      'navigationDockId': 1,
      'navigationTargetId': 4,
      'navigationTargetName': 'facebook',
      'navigationTargetImagePath': 'logo-facebook',
      'navigationTargetLink': 'repair-record',
      'navigationTargetParams': 'deviceId',
      'navigationTargetVisible': true,
      'navigationTargetDescription': 'facebook'
    }, {
      'navigationDockTargetMapId': 7,
      'navigationDockId': 1,
      'navigationTargetId': 4,
      'navigationTargetName': '复制',
      'navigationTargetImagePath': 'md-clipboard',
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
