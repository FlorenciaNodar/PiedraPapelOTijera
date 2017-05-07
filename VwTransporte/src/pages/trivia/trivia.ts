import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { TriviaUno } from '../triviaUno/triviaUno';


@Component({
  selector: 'trivia',
  templateUrl: 'trivia.html'
})
export class Trivia{

public listaDePreguntas:Preguntas[];//lista de preguntas
public posActual:Number;//posicion actual
public preguntaSeleccionada:Preguntas;
public nombreBoton:String;
  usu = { nombre:'',
        Puntuacion:0,
        cantidadCorrectas:0,
        incorrectas:0,
        gano:false};

llenarArray(){
  //en este metodo llenamos las preguntas
  this.posActual=0;
  this.listaDePreguntas= [];
   this.listaDePreguntas.push(
  {
    titulo:"De que color es la señal de transito PARE",
    opcion1:"Rojo",
    opcion2:"Amarillo",
    opcion3:"Negro",
    respuestaCorrecta:"1",
    respuesta:"3"
  },
  {
    titulo:"Cuantos colores tiene el semaforo de trnasito",
    opcion1:"1",
    opcion2:"3",
    opcion3:"2",
    respuestaCorrecta:"2",
    respuesta:"2"
  }
  ,
  {
    titulo:"Cual es el nivel maximo de alcoholemia permitido",
    opcion1:"0.8",
    opcion2:"0.5",
    opcion3:"1.5",
    respuestaCorrecta:"2",
    respuesta:"1"
  }
  );

}

constructor(public navCtrl: NavController, public NavParams:NavParams) {

this.nombreBoton="Siguiente";
  this.llenarArray();
  this.preguntaSeleccionada=this.listaDePreguntas[0];
   this.usu.nombre=this.NavParams.data.nombre;
   this.usu.Puntuacion=0;
   this.usu.cantidadCorrectas=0;
   this.usu.incorrectas=0;
   this.usu.gano=false;

}


siguiente()
{
  //validacion de si posactual es == a listadepreguntas.legth-1 (la logica es ya no pasas al siguiente sino que finalizas el o )

  if(this.posActual < this.listaDePreguntas.length-1){
  this.posActual=1 + this.posActual.valueOf();
  this.preguntaSeleccionada=this.listaDePreguntas[this.posActual.valueOf()];
  
  if(this.posActual == this.listaDePreguntas.length-1)
    this.nombreBoton="Finalizar";

  
}else{
  
  this.calcularCorrectas();
  this.finalizar();
}

}

calcularCorrectas(){
  var pos=0;
  for(var i=0; i < this.listaDePreguntas.length; i++)
  {
    if(this.listaDePreguntas[i].respuesta == this.listaDePreguntas[i].respuestaCorrecta)
      this.usu.cantidadCorrectas++;
  }

  this.usu.incorrectas=this.listaDePreguntas.length-this.usu.cantidadCorrectas;

  if(this.usu.cantidadCorrectas > this.usu.incorrectas)
  {
  this.usu.gano = true;
  }
}


finalizar(){
  this.navCtrl.push(TriviaUno, this.usu);
  //viajar a la pagina final() pasar por parameros cantidad de respuestas acertadas

}
}

class Preguntas
{

  titulo:String;
opcion1:String;
opcion2:String;
opcion3:String;
respuestaCorrecta:String;
respuesta:String;

}
