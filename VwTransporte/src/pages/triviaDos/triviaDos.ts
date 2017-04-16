import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { TriviaUno } from '../triviaUno/triviaUno';
import { TriviaTres } from '../triviaTres/triviaTres';


@Component({
  selector: 'triviaDos',
  templateUrl: 'triviaDos.html'
})
export class TriviaDos{

constructor(public navCtrl: NavController) {}


siguiente(){
  this.navCtrl.push(TriviaTres);
}

anterior(){
  this.navCtrl.push(TriviaUno);
}
 
}