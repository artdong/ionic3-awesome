import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {IonicPage} from "ionic-angular";

@IonicPage({name: 'tabs-feature'})
@Component({
  selector: 'page-feature',
  templateUrl: 'feature.html'
})
export class FeaturePage {
  appCollections: any = [];
  thirdPartyServicesCollections: any = [];
  defaultImg: String = "assets/img/default-customService.png";

  constructor(public navCtrl: NavController) {
    this.appCollections = {
      "appId": 1,
      "name": "apps",
      "key": "appModules",
      "description": "app模块配置",
      "modules": [{
        "moduleId": 1,
        "moduleGroupId": 1,
        "moduleGroupName": null,
        "name": "二维码",
        "key": "qrcode",
        "category": "二维码",
        "image": "http://iconfont.alicdn.com/t/1494395652678.png@100h_100w.jpg",
        "link": "page-qrcode",
        "path": "",
        "params": "",
        "checked": true,
        "isThirdParty": false
      }, {
        "moduleId": 2,
        "moduleGroupId": 1,
        "moduleGroupName": null,
        "name": "关于",
        "key": "about",
        "category": "about",
        "image": "http://iconfont.alicdn.com/t/1508911280546.jpg@100h_100w.jpg",
        "link": "tabs-about",
        "path": "",
        "params": "",
        "checked": true,
        "isThirdParty": false
      }, {
        "moduleId": 3,
        "moduleGroupId": 1,
        "moduleGroupName": null,
        "name": "百度",
        "key": "baidu",
        "category": "website",
        "image": "https://www.baidu.com/img/baidu_jgylogo3.gif",
        "link": "https://www.baidu.com",
        "path": "",
        "params": "",
        "checked": true,
        "isThirdParty": true
      }, {
        "moduleId": 5,
        "moduleGroupId": 1,
        "moduleGroupName": null,
        "name": "网易",
        "key": "wangyi",
        "category": "website",
        "image": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2490895003,2642262494&fm=58&s=2370E532CFA568134854D6FC0300F020",
        "link": "http://www.163.com/",
        "path": "",
        "params": "",
        "checked": true,
        "isThirdParty": true
      }, {
        "moduleId": 6,
        "moduleGroupId": 1,
        "moduleGroupName": null,
        "name": "腾讯",
        "key": "tencent",
        "category": "website",
        "image": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2878042398,2115472320&fm=58&s=CFD77C9681A54D1118E7A556030000B3&bpow=121&bpoh=75",
        "link": "http://www.qq.com/",
        "path": "",
        "params": "",
        "checked": true,
        "isThirdParty": true
      }, {
        "moduleId": 7,
        "moduleGroupId": 1,
        "moduleGroupName": null,
        "name": "美团",
        "key": "meituan",
        "category": "website",
        "image": "https://s0.meituan.net/bs/fe-web-meituan/404d350/img/logo.png",
        "link": "https://sz.meituan.com",
        "path": "",
        "params": "",
        "checked": true,
        "isThirdParty": true
      }]
    };
  }
}
