import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { TriviaCuatro } from '../triviaCuatro/triviaCuatro';
import { TriviaSeis } from '../triviaSeis/triviaSeis';


@Component({
  selector: 'triviaCinco',
  templateUrl: 'triviaCinco.html'
})
export class TriviaCinco{

constructor(public navCtrl: NavController) {}


siguiente(){
  this.navCtrl.push(TriviaSeis);
}

anterior(){
  this.navCtrl.push(TriviaCuatro);
}
 
}