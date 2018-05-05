import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular';

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
    public events: Events,
    public modalCtrl: ModalController
  ) {
  }

  onInput(event) {

  }

  new() {
    let profileModal = this.modalCtrl.create('NewPage', { title: 'Venda', userId: 8675309 });
    profileModal.present();
  }

}
