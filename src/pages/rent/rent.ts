import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular';

/**
 * Generated class for the RentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rent',
  templateUrl: 'rent.html',
})
export class RentPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public modalCtrl: ModalController
  ) {
  }

  new() {
    let profileModal = this.modalCtrl.create('NewPage', { title: 'Aluguel', userId: 8675309 });
    profileModal.present();
  }

}
