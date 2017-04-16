import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { TriviaTres } from '../triviaTres/triviaTres';
import { TriviaCinco } from '../triviaCinco/triviaCinco';


@Component({
  selector: 'triviaCuatro',
  templateUrl: 'triviaCuatro.html'
})
export class TriviaCuatro{

constructor(public navCtrl: NavController) {}


siguiente(){
  this.navCtrl.push(TriviaCinco);
}

anterior(){
  this.navCtrl.push(TriviaTres);
}
 
}