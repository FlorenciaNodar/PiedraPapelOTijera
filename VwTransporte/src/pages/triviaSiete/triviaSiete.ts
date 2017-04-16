import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { TriviaSeis } from '../triviaSeis/triviaSeis';
//import { TriviaSiete } from '../triviaSiete/triviaSiete';


@Component({
  selector: 'triviaSiete',
  templateUrl: 'triviaSiete.html'
})
export class TriviaSiete{

constructor(public navCtrl: NavController) {}


/*siguiente(){
  this.navCtrl.push(TriviaSiete);
}*/

anterior(){
  this.navCtrl.push(TriviaSeis);
}
 
}