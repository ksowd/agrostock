import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  @ViewChild(Slides) slides: Slides;

  ngAfterViewInit() {
    this.slides.freeMode = true;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }


  next() {
  		this.navCtrl.push("LoginPage", {}, {
  			animate: true,
  			direction: "forward"
  		});
  }
}


