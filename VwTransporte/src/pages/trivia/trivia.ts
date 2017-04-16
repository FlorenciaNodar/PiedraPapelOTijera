import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { TriviaUno } from '../triviaUno/triviaUno';


@Component({
  selector: 'trivia',
  templateUrl: 'trivia.html'
})
export class Trivia{

constructor(public navCtrl: NavController) {}


siguiente(){
  this.navCtrl.push(TriviaUno);
}

anterior()
{
  this.navCtrl.push(HelloIonicPage);
}
 
}