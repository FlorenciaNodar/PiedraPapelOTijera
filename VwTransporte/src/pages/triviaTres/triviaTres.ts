import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { TriviaDos } from '../triviaDos/triviaDos';
import { TriviaCuatro } from '../triviaCuatro/triviaCuatro';


@Component({
  selector: 'triviaTres',
  templateUrl: 'triviaTres.html'
})
export class TriviaTres{

constructor(public navCtrl: NavController) {}


siguiente(){
  this.navCtrl.push(TriviaCuatro);
}

anterior(){
  this.navCtrl.push(TriviaDos);
}
 
}