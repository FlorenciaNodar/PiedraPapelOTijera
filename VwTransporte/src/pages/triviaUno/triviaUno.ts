import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { Trivia } from '../trivia/trivia';


@Component({
  selector: 'triviaUno',
  templateUrl: 'triviaUno.html'
})
export class TriviaUno{

constructor(public navCtrl: NavController) {}


/*siguiente(){
  this.navCtrl.push(TriviaUno);
}*/

anterior(){
  this.navCtrl.push(Trivia);
}
 
}