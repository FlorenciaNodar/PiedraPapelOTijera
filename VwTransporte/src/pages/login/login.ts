import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  email: any;
  password: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFire) {}
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
 
  Login() {
    this.angfire.auth.login({
      email: this.email,
      password: this.password
    },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password  
      }).then((response) => {
        console.log('Login success' + JSON.stringify(response));
        let currentuser = {
          email: response.auth.email,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        this.navCtrl.pop();
      }).catch((error) => {
        console.log(error);
    })
  }
}