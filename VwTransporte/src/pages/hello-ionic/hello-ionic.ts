import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage{

constructor(public navCtrl: NavController) {
  window.localStorage.removeItem('currentuser');
    if (!this.isLoggedin()) {
      console.log('You are not logged in');
      this.navCtrl.push(Login);
    }
  }
 
  isLoggedin() {
    if (window.localStorage.getItem('currentuser')) {
      return true;
    }
  }
 
}