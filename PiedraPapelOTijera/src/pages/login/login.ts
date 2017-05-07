import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
// import { Register } from '../register/register';
// import { Trivia } from '../trivia/trivia';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class Login {

   usu = { nombre:''};
  email: any;
  password: any;
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public alertCtrl: AlertController)
   {
    //  this.usu = this.navParams.data; 
   }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
 
 Sonido(){


   
 }
 
  Login() {
    this.usu.nombre=this.email;
if(this.email!="" && this.email!=null){
this.navCtrl.push(HelloIonicPage, this.usu);
}else{
     let alert = this.alertCtrl.create({
          title: 'ERROR!',
          subTitle: 'Debe ingresar un nombre de jugador!',
          buttons: ['OK']
          });
          alert.present();
}
    //   let loader = this.loadingCtrl.create({
    //   content: "Espere...",
    //   duration: 3000
    // });
    // loader.present();
    // this.angfire.auth.login({
      
    //   email: this.email,
    //   password: this.password
  
    // },
    //   {
    //     provider: AuthProviders.Password,
    //     method: AuthMethods.Password  
    //   }).then((response) => {
     
    //     console.log('Login success' + JSON.stringify(response));
    //     let currentuser = {
    //       email: response.auth.email,
    //       picture: response.auth.photoURL
    //     };
    //     window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
    //     this.navCtrl.pop();
    //   }).catch((error) => {
    //     console.log(error);
    //       let alert = this.alertCtrl.create({
    //       title: 'ERROR!',
    //       subTitle: 'Usuario y/o contraseña incorrectas!',
    //       buttons: ['OK']
    //       });
    //       alert.present();
          
    // })
  }

}