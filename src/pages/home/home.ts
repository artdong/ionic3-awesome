import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, Modal, ModalController } from 'ionic-angular';
import { CToastProvider, ThemeService } from '../../providers/providers';
import { QQSDK, QQShareOptions } from '@ionic-native/qqsdk';
import { CModalComponent, CModalRightComponent } from '../../modules/shared/components/index';

@IonicPage({name: 'tabs-home'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedTheme: String;
  options: QQShareOptions = {
    client: this.qq.ClientType.QQ,
    scene: this.qq.Scene.QQ,
    title: 'This is a title for cordova-plugin-qqsdk',
    url: 'https://cordova.apache.org/',
    image: 'https://cordova.apache.org/static/img/cordova_bot.png',
    description: 'This is  Cordova QQ share description',
    flashUrl: 'http://stream20.qqmusic.qq.com/30577158.mp3',
  };

  clientOptions: QQShareOptions = {
    client: this.qq.ClientType.QQ,
  };

  shareTextOptions: QQShareOptions = {
    client: this.qq.ClientType.QQ,
    text: 'This is Share Text',
    scene: this.qq.Scene.QQ,
  };

  mds: Modal;
  showModal = false;

  constructor(private navCtrl: NavController,
              private actionSheetCtrl: ActionSheetController,
              private themeService: ThemeService,
              private cToast: CToastProvider,
              private qq: QQSDK,
              private modalController: ModalController) {
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

  goVideo() {
    this.navCtrl.push('video');
  }

  testToast() {
    this.cToast.show('自定义Toast', 2000);
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl
      .create({
        title: '更换头像',
        cssClass: 'photoChoice-ios',
        buttons: [
          {
            text: '拍照',
            icon: 'ios-arrow-forward',
            role: 'destructive',
            handler: () => {
              console.log('Destructive clicked');
            }
          }, {
            text: '从相册选择',
            icon: 'ios-arrow-forward',
            handler: () => {
              console.log('Archive clicked');
            }
          }, {
            text: '取消',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
    actionSheet.present();
  }

  shareWxSession() {
    let wechat = (window as any).Wechat;
    wechat.isInstalled(function (installed) {
      if (!installed) {
        alert('您没有安装微信！');
        return;
      }
    }, function (reason) {
      alert('Failed: ' + reason);
    });
    wechat.share({
      message: {
        title: '分享到朋友圈',
        description: '分享到朋友圈',
        // thumb: this.shareImg,
        media: {
          type: wechat.Type.LINK,
          webpageUrl: 'www.baidu.com'
        }
      },
      scene: wechat.Scene.SESSION   // share to SESSION
    }, function () {
      alert('分享成功');
    }, function (reason) {
      alert('Failed: ' + reason);
    });
  }

  shareWxTimeLine() {
    let wechat = (window as any).Wechat;
    wechat.isInstalled(function (installed) {
      if (!installed) {
        alert('您没有安装微信！');
        return;
      }
    }, function (reason) {
      alert('Failed: ' + reason);
    });
    wechat.share({
      message: {
        title: '分享给好友',
        description: '分享给好友',
        // thumb: this.shareImg,
        media: {
          type: wechat.Type.LINK,
          webpageUrl: 'www.baidu.com'
        }
      },
      scene: wechat.Scene.TIMELINE   // share to Timeline
    }, function () {
      alert('分享成功');
    }, function (reason) {
      alert('Failed: ' + reason);
    });
  }

  shareQQ() {
    // this.qq.shareText(this.shareTextOptions)
    //   .then(() => {
    //     alert('shareText success');
    //   })
    //   .catch(error => {
    //     alert(error);
    //   });

    let qq = (window as any).QQSDK;
    qq.checkClientInstalled(function () {
      let args: any = {};
      args.scene = qq.Scene.QQ; // QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
      args.url = 'https://cordova.apache.org/';
      args.title = '分享到qq';
      args.description = '分享到qq';
      args.image = 'https://cordova.apache.org/static/img/cordova_bot.png';
      qq.shareNews(function () {
        alert('分享成功');
      }, function (failReason) {
        alert(failReason);
      }, args);
    }, function () {
      // if installed QQ Client version is not supported sso,also will get this error
      alert('您没有安装QQ！');
    });
  }

  shareQZone() {
    let qq = (window as any).QQSDK;
    qq.checkClientInstalled(function () {
      let args: any = {};
      args.scene = qq.Scene.QQZone; // QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
      args.url = 'https://cordova.apache.org/';
      args.title = '分享到qq空间';
      args.description = '分享到qq空间';
      args.image = 'https://cordova.apache.org/static/img/cordova_bot.png';
      qq.shareNews(function () {
        alert('分享成功');
      }, function (failReason) {
        alert(failReason);
      }, args);
    }, function () {
      // if installed QQ Client version is not supported sso,also will get this error
      alert('您没有安装QQ！');
    });
  }

  weather() {
    this.navCtrl.push('WeatherPage');
  }

  fingerprint() {
    this.navCtrl.push('FingerprintPage');
  }

  openModal() {
    this.mds = this.modalController.create(CModalComponent, {
      navigationDockId: 1
    }, {
      showBackdrop: true,
      enableBackdropDismiss: true,
      // cssClass: 'custom-modal',
      enterAnimation: 'modal-from-bottom-enter',
      leaveAnimation: 'modal-from-bottom-leave'
    });
    this.mds.onDidDismiss(data => {
      this.showModal = false;
    });
    this.mds.present().then(data => {
      this.showModal = true;
    });
  }

  openModalFromRight() {
    this.mds = this.modalController.create(CModalRightComponent, {
      navigationDockId: 1
    }, {
      showBackdrop: true,
      enableBackdropDismiss: true,
      // cssClass: 'custom-modal',
      enterAnimation: 'modal-from-right-enter',
      leaveAnimation: 'modal-from-right-leave'
    });
    this.mds.onDidDismiss(data => {
      this.showModal = false;
    });
    this.mds.present().then(data => {
      this.showModal = true;
    });
  }

  closeModel() {
    if (this.mds && this.showModal) {
      this.mds.dismiss();
    }
  }

  openModalMenu() {
    if (this.mds && this.showModal) {
      this.mds.dismiss();
    } else {
      this.openModal();
    }
  }

  openModalMenuFromRight() {
    if (this.mds && this.showModal) {
      this.mds.dismiss();
    } else {
      this.openModalFromRight();
    }
  }

  goEcharts() {
    this.navCtrl.push('page-echart-pie');
  }
}
