import { Component, ViewChild } from '@angular/core';
import { Platform, Config, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'LandingPage';
  privatePages: Array<{ title: string, component: any, icon: string }>;
  mode = "compra";
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public config: Config,
    public events: Events
  ) {
    this.events.subscribe('app:mode', (mode) => {
      console.log(mode);
      this.mode = mode;
      this.updateList();
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.config.set("ios", "backButtonText", "Voltar");
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.updateList();
  }

  logout() {
    this.nav.setRoot('LandingPage', {}, {
      animate: true,
      direction: 'back'
    })
  }

  openPage(page) {
    this.nav.push(page.component, {}, {
      animate: true,
      direction: 'forward'
    })
  }

  updateList() {
    if (this.mode == 'compra') {
      this.privatePages = [
        { title: 'COTAÇÃO', component: 'CotationPage', icon: '' },
        { title: 'CLIMA', component: 'WeatherPage', icon: '' },
        { title: 'INTERESSES', component: 'WishlistPage', icon: '' },
        { title: 'NEGOCIAÇÕES', component: 'TalksPage', icon: '' },
      ]
    }
    else if (this.mode == 'venda') {
      this.privatePages = [
        { title: 'COTAÇÃO', component: 'CotationPage', icon: '' },
        { title: 'CLIMA', component: 'WeatherPage', icon: '' },
        { title: 'NEGOCIAÇÕES', component: 'TalksPage', icon: '' },
      ]
    }
    else if (this.mode == 'troca') {
      this.privatePages = [
        { title: 'COTAÇÃO', component: 'CotationPage', icon: '' },
        { title: 'CLIMA', component: 'WeatherPage', icon: '' },
        { title: 'NEGOCIAÇÕES', component: 'TalksPage', icon: '' },
        { title: 'ITEMS', component: 'ItemsPage', icon: '' },
      ]
    }
    else if (this.mode == 'aluguel') {
      this.privatePages = [
        { title: 'COTAÇÃO', component: 'CotationPage', icon: '' },
        { title: 'CLIMA', component: 'WeatherPage', icon: '' },
      ]
    }
  }
}
