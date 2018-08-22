import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({name: 'page-waterflow'})
@Component({
  selector: 'page-waterflow',
  templateUrl: 'waterflow.html'
})
export class WaterflowPage {
  img_data = [{
    src: 'assets/imgs/1.jpg'
  }, {
    src: 'assets/imgs/2.jpg'
  }, {
    src: 'assets/imgs/3.jpg'
  }, {
    src: 'assets/imgs/4.jpg'
  }, {
    src: 'assets/imgs/5.jpg'
  }, {
    src: 'assets/imgs/6.jpg'
  }, {
    src: 'assets/imgs/7.jpg'
  }, {
    src: 'assets/imgs/8.jpg'
  }, {
    src: 'assets/imgs/9.jpg'
  }, {
    src: 'assets/imgs/10.jpg'
  }, {
    src: 'assets/imgs/11.jpg'
  }, {
    src: 'assets/imgs/12.jpg'
  }, {
    src: 'assets/imgs/13.jpg'
  }, {
    src: 'assets/imgs/14.jpg'
  }, {
    src: 'assets/imgs/15.jpg'
  }, {
    src: 'assets/imgs/16.jpg'
  }, {
    src: 'assets/imgs/17.jpg'
  }, {
    src: 'assets/imgs/ake.jpg'
  }, {
    src: 'assets/imgs/daji.jpg'
  }, {
    src: 'assets/imgs/diaochan.jpg'
  }, {
    src: 'assets/imgs/houzi.jpg'
  }, {
    src: 'assets/imgs/libai.jpg'
  }, {
    src: 'assets/imgs/xiahoudun.jpg'
  }, {
    src: 'assets/imgs/zhaoyun.jpg'
  }, {
    src: 'assets/imgs/nakelulu.jpg'
  }, {
    src: 'assets/imgs/zhenji.jpg'
  }, {
    src: 'assets/imgs/direnjie.jpg'
  }, {
    src: 'assets/imgs/buzhihuowu.jpg'
  }, {
    src: 'assets/imgs/question.jpg'
  }];

  constructor(public navCtrl: NavController) {
  }

  ionViewWillEnter() {
    this.getNode();
  }

  getNode() {
    let parentNode = document.getElementById('container');
    let childNodeArray: any = parentNode.getElementsByClassName('box');
    let screenWidth = document.documentElement.clientWidth;
    let childWidth = childNodeArray[0].offsetWidth;
    let num = Math.floor(screenWidth / childWidth); // 获得一排摆的个数 用Math.floor()转换为整数
    parentNode.style.cssText = 'width:' + childWidth * num + 'px; margin:0 auto'; // 固定container的宽并设置居中
    this.setImagePosition(num, childNodeArray);
  }

  setImagePosition(num, childArray) {
    let imgHeightArray = []; // 定义数组用于存放所有图片的高度
    for (let i = 0; i < childArray.length; i++) { // 遍历所有图片
      if (i < num) {
        imgHeightArray[i] = childArray[i].offsetHeight; // 取得第一排图片的高度
      } else {
        let minHeight = Math.min.apply(null, imgHeightArray); // 获取第一排图片中高度最小的图片
        let minIndex = this.getMinHeight(imgHeightArray, minHeight); // 函数获得高度最小的图片的位置
        childArray[i].style.position = 'absolute'; // 绝对定位图片
        childArray[i].style.top = minHeight + 'px'; // 图片距顶部像素
        childArray[i].style.left = childArray[minIndex].offsetLeft + 'px'; // 图片距左的像素
        imgHeightArray[minIndex] = imgHeightArray[minIndex] + childArray[i].offsetHeight; // 将最低高度的box的高度加上它下方的box高度
      }
    }
  }

  getMinHeight(imgHeightArray, minHeight) {
    for (let i in imgHeightArray) {
      if (imgHeightArray[i] == minHeight) { // 循环所有数组的高度 让它等于最小图片的高度 返回i值
        return i;
      }
    }
  }
}
