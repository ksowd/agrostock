import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the SellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html',
})
export class SellPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events
  ) {
  }

  ionViewWillEnter() {
    this.events.publish('app:mode', 'venda');
  }

}
