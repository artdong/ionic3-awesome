import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'tabs-home';
  tab2Root = 'tabs-feature';
  tab3Root = 'tabs-about';

  constructor() {

  }
}
