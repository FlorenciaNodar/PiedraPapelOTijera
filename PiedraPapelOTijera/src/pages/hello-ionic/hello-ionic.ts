import { root } from 'rxjs/util/root';
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Login } from '../login/login';
// import {Trivia} from '../trivia/trivia';
 import {Autor} from '../autor/autor';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage{

  usu = { nombre:''};


constructor(public navCtrl: NavController,public navParams:NavParams) {
  this.usu=navParams.data;
  // window.localStorage.removeItem('currentuser');
  //   if (!this.isLoggedin()) {
  //     console.log('You are not logged in');
  //     this.navCtrl.push(Login, this.usu);
  //   }
//  this.navCtrl.push(Login, this.usu);

  }
 
  // isLoggedin() {
  //   if (window.localStorage.getItem('currentuser')) {
  //     return true;
  //   }
  // }

  jugar(){
      // this.navCtrl.push(Trivia, this.usu);
  } 

  reglas()
  {
      // this.navCtrl.push(Trivia);
  } 

  autor()
  {
       this.navCtrl.push(Autor);
  }
  desloguearse()
  {
      this.navCtrl.push(Login);
  }
 
}