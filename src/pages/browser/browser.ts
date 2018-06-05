/**
 * Created by DreamBoy on 2016/11/21.
 */
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Platform, Navbar } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserPopover } from './browser-popover';
import { TabsPage } from '../../pages/tabs/tabs';

@IonicPage({ name: 'browser' })
@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html'
})
export class BrowserPage {
  browser: any = {
    isLoaded: false, // 网页是否被加载
    proObj: null, // 进度条对象
    progress: 0, // 网页访问的进度条
    secUrl: '', // 安全链接

    title: '加载中',
    url: ''
  };

  shareConfig: any = {
    isShow: true
  }; // 分享控制的配置

  microAppCall;

  constructor(public navCtrl: NavController,
    private params: NavParams,
    private platform: Platform,
    private popoverCtrl: PopoverController,
    private sanitizer: DomSanitizer) {
    let browser = this.params.get('browser');
    if (browser) {
      this.browser.title = browser.title;
      this.browser.url = browser.url;
      this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(browser.url);

      if (browser.share) {
        this.browser.share = browser.share;
      }

    } else {
      this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.browser.url);
    }
    this.reload();
    let backAction = this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(TabsPage, { tabindex: 1 });
      backAction();
    }, 2);
    let self = this;
    this.microAppCall = function (e) { // 接收iframe中发送过来的数据
      if (e.data.msgType == 'refresh') {
        self.reload();
      } else if (e.data.msgType == 'close') {
        self.navCtrl.push(TabsPage, { tabindex: 1 }, { direction: 'back' });
      }
    };

    window.addEventListener('message', this.microAppCall);
  }

  @ViewChild(Navbar) navBar: Navbar;
  ionViewDidLoad() {
    if (!this.browser.proObj) {
      this.browser.proObj = document.getElementById('progress');
    }
    this.onprogress();

    this.navBar.backButtonClick = (e: UIEvent) => {
      this.navCtrl.push(TabsPage, { tabindex: 1 } , {direction: 'back'});
    };
  }

  ionViewDidLeave() {
    window.removeEventListener('message', this.microAppCall);
  }

  // 生成随机数
  private random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // 网页访问进度
  private onprogress() {
    // 随机时间
    let timeout = this.random(10, 30);

    let timer = setTimeout(() => {
      if (this.browser.isLoaded) {
        this.browser.proObj.style.width = '100%';
        clearTimeout(timer);
        return;
      }

      // 随机进度
      this.browser.progress += this.random(1, 5);

      // 随机进度不能超过 90%，以免页面还没加载完毕，进度已经 100% 了
      if (this.browser.progress > 90) {
        this.browser.progress = 90;
      }

      this.browser.proObj.style.width = this.browser.progress + '%';
      this.onprogress();
    }, timeout);
  }

  // 如果iframe页面加载成功后
  loaded() {
    this.browser.isLoaded = true;
  }

  // 显示Popver选项
  presentPopover(myEvent) {
    let cb = {
      refresh: () => {
        this.reload();
      },
      close: () => {
        this.navCtrl.setRoot(TabsPage, { tabindex: 1 });
      }
    };

    let popover = this.popoverCtrl.create(BrowserPopover, {
      callback: cb
    });
    popover.present({
      ev: myEvent
    });
  }

  // 重新加载页面
  reload() {
    let title = this.browser.title;
    let url = this.browser.secUrl;
    this.browser.title = '加载中';
    this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');

    setTimeout(() => {
      this.browser.isLoaded = false;
      this.browser.progress = 0;
      if (!this.browser.proObj) {
        this.browser.proObj = document.getElementById('progress');
      }
      this.onprogress();
      this.browser.title = title;
      this.browser.secUrl = url;
    }, 10);
  }
}
