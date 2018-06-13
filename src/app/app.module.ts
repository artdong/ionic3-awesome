import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ThemeService } from '../providers/theme/theme.service';
import { BrowserPopover } from '../pages/browser/browser-popover';

import { Clipboard } from '@ionic-native/clipboard';
import { SharedModule } from '../modules/index';
import { CToastProvider } from '../providers/c-toast/c-toast';
import { WeatherProvider } from '../providers/weather/weather';
import { IonicStorageModule } from '@ionic/storage'

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    BrowserPopover
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      // iconMode: 'ios',
      // mode: 'ios',
      // backButtonText: '返回',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      tabsHideOnSubPages: 'true' // ionic3隐藏全部子页面tabs
    }),
    IonicStorageModule.forRoot(),
    SharedModule,
    HttpClientModule
  ],
  exports: [],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    BrowserPopover
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ThemeService,
    Clipboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CToastProvider,
    WeatherProvider
  ]
})
export class AppModule {
}
