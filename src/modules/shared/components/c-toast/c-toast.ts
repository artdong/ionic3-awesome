import { Component } from '@angular/core';
import { CToastProvider } from "../../../../providers/providers";
/**
 * Generated class for the CToastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'c-toast',
  templateUrl: 'c-toast.html'
})
export class CToastComponent {
  active: boolean = false;
  message: string = '自定义Toast';
  //  定义隐藏动画的变量
  hide = false;

  constructor(private cToast: CToastProvider) {
    console.log('Hello CToastComponent Component');
    this.cToast.show = this.show.bind(this);
  }

  show(message, duration) {

    this.message = message;
    this.active = true;

    setTimeout(() => {
      this.hide = true;
      setTimeout(() => {
        this.hide = false;
        this.active = false;
      }, 200)  // 隐藏动画完后再移除
    }, duration);
  }
}
