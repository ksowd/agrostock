import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  apiurl = "api";

  constructor(public http: HttpClient, public platform: Platform) {
    console.log('Hello AuthServiceProvider Provider');
    if (platform.is("cordova")) {
      this.apiurl = '';
    }
  }
  login(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiurl + "login", data).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      })

    });
  }

  signup(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiurl + "signup", data).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      })

    });
  }
}
