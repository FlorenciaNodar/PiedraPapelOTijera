import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {
  constructor(public navCtrl: NavController) {}

  	/*public usuario ={nombre:""};
	clicked(event){
	console.log(event);
	}*/

VolverAlLogin(){
	this.navCtrl.setRoot(HelloIonicPage);
}

}
