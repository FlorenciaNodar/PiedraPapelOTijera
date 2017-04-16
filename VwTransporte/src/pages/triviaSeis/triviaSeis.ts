import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { TriviaCinco } from '../triviaCinco/triviaCinco';
import { TriviaSiete } from '../triviaSiete/triviaSiete';


@Component({
  selector: 'triviaSeis',
  templateUrl: 'triviaSeis.html'
})
export class TriviaSeis{

constructor(public navCtrl: NavController) {}


siguiente(){
  this.navCtrl.push(TriviaSiete);
}

anterior(){
  this.navCtrl.push(TriviaCinco);
}
 
}