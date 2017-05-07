import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { Trivia } from '../trivia/trivia';


@Component({
  selector: 'triviaUno',
  templateUrl: 'triviaUno.html'
})

export class TriviaUno{

 usu = { nombre:'',
        Puntuacion:0,
        cantidadCorrectas:0,
        incorrectas:0,
        gano:false};

tituloResultado:String;

constructor(public navCtrl: NavController, public NavParams: NavParams) {
 this.usu = this.NavParams.data;
this.tituloResultado=this.usu.gano?"Ganaste":"Perdiste"; 

}

 
}