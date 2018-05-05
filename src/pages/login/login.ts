import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public authService: AuthServiceProvider) {

    this.form = formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signup() {
  	this.navCtrl.push("SignupPage", {}, {
		animate: true,
		direction: "forward"
    });
  }
  login() {
    console.log(this.form.value);
    this.authService.login(this.form.value).then(data => {
      console.log("login ", data);
      this.navCtrl.push(TabsPage, {}, {animate: true, direction: "forward"})    
    }).catch(err => {
      console.log("login ", err);
    })
  }
}
