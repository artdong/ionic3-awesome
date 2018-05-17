import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {AlphaListComponent} from '../../modules/alpha-list/alpha-list';

@IonicPage({name: 'contact'})

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements AfterViewInit {
  data = [];
  items = [];
  allItems: any;
  searchText: string;
  searchItems: any;
  isFilter = false;

  constructor(public navCtrl: NavController,) {
    this.data = [{
      "id": "A",
      "items": [{
        "name": "阿珂",
        "gender": 2,
        "avatar": "assets/imgs/ake.jpg",
        "phone": "13900010008",
        "mail": "ake@163.com",
        "genderName": "女",
        "fl": "A"
      }]
    }, {
      "id": "D",
      "items": [{
        "name": "妲己",
        "avatar": "assets/imgs/daji.jpg",
        "phone": "1390011011",
        "mail": "daji@163.com",
        "genderName": "女",
        "fl": "D"
      },
        {
          "name": "貂蝉",
          "avatar": "assets/imgs/diaochan.jpg",
          "phone": "13900010001",
          "mail": "diaochan@163.com",
          "genderName": "女",
          "fl": "D"
        },
        {
          "name": "狄仁杰",
          "avatar": "assets/imgs/direnjie.jpg",
          "phone": "13900010001",
          "mail": "direnjie@163.com",
          "genderName": "男",
          "fl": "D"
        }]
    }, {
      "id": "H",
      "items": [{
        "name": "猴子",
        "avatar": "assets/imgs/houzi.jpg",
        "phone": "13900010002",
        "mail": "houzi@163.com",
        "genderName": "男",
        "fl": "H"
      }]
    }, {
      "id": "L",
      "items": [{
        "name": "李白",
        "avatar": "assets/imgs/libai.jpg",
        "phone": "13900011012",
        "mail": "libai@163.com",
        "genderName": "男",
        "fl": "L"
      }]
    }, {
      "id": "N",
      "items": [{
        "name": "娜可露露",
        "avatar": "assets/imgs/nakelulu.jpg",
        "phone": "13900011012",
        "mail": "nakelulu@163.com",
        "genderName": "女",
        "fl": "N"
      }]
    }, {
      "id": "X",
      "items": [{
        "name": "夏侯惇",
        "avatar": "assets/imgs/xiahoudun.jpg",
        "phone": "13900011012",
        "mail": "xiahoudun@163.com",
        "genderName": "男",
        "fl": "X"
      }]
    }, {
      "id": "Z",
      "items": [{
        "name": "赵云",
        "avatar": "assets/imgs/zhaoyun.jpg",
        "phone": "13900011012",
        "mail": "zhaoyun@163.com",
        "genderName": "男",
        "fl": "Z"
      }, {
        "name": "甄姬",
        "avatar": "assets/imgs/zhenji.jpg",
        "phone": "13900010004",
        "mail": "zhenji@163.com",
        "genderName": "女",
        "fl": "Z"
      }]
    }];
    this.getContact();
  }


  @ViewChild(AlphaListComponent) alist: AlphaListComponent;

  ngAfterViewInit() {
  }

  ionViewWillEnter() {
  }

  getCurrentItems(ev: any) {
    if (!this.searchText) {
      this.searchItems = this.allItems.concat();
      this.isFilter = false;
      return;
    }
    this.isFilter = true;
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.searchItems = this.allItems.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.fl.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      })
    }
  }

  onClearFilter(ev: any) {
    this.isFilter = false;
  }

  getContact() {
    this.data.forEach((idx) => {
      idx.items.forEach((item) => {
        this.items.push(item);
      });
    })
    this.allItems = this.items.concat();
  }

  goDetail(contact) {
    this.navCtrl.push('contact-detail', {'item': contact})
  }
}
