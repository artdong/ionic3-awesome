import { Component, ViewChild } from '@angular/core';
import { NavParams, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FeaturePage } from '../feature/feature';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;

  // tab1Root = 'tabs-home';
  // tab2Root = 'tabs-feature';
  // tab3Root = 'tabs-about';

  tab1Root = HomePage;
  tab2Root = FeaturePage;
  tab3Root = AboutPage;

  constructor(private navparams: NavParams) {

  }

  ionViewWillEnter() {
    if (this.navparams.get('tabindex') == 1) {
      this.tabRef.select(1);
    }
  }
}
