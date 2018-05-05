import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  form: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public authService: AuthServiceProvider) {

    this.form = formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      cnpj: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['AC', Validators.required],
      endereco: ['', Validators.required],
      senha: ['', Validators.required]
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup() {
    console.log(this.form.value);
    this.authService.signup(this.form.value).then(data => {
      console.log("signup ", data);
      // this.navCtrl.push(TabsPage, {}, { animate: true, direction: "forward" })
    }).catch(err => {
      console.log("signup ", err);
    })
  }
}
