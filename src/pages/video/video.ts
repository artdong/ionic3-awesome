import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

@IonicPage({name: 'video'})
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

  ionViewWillLeave() {
    this.playPause();
  }

  playPause() {
    let myVideo = document.getElementsByTagName('video')[0];
    if (myVideo.paused) {
      myVideo.play();
    }
    else {
      myVideo.pause();
    }
  }

  goHome() {
    this.navCtrl.push(TabsPage);
  }

}
