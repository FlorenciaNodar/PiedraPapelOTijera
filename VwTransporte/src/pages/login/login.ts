import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { Register } from '../register/register';
import { Grid } from '../grid/grid';
import { AlertController } from 'ionic-angular';
 


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  email: any;
  password: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFire, public alertCtrl: AlertController) {}
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
 
  Login() {
    this.angfire.auth.login({
      email: this.email,
      password: this.password
    },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password  
      }).then((response) => {
        console.log('Login success' + JSON.stringify(response));
        let currentuser = {
          email: response.auth.email,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        this.navCtrl.pop();
      }).catch((error) => {
        console.log(error);
          let alert = this.alertCtrl.create({
          title: 'ERROR!',
          subTitle: 'Usuario y/o contraseña incorrectas!',
          buttons: ['OK']
          });
          alert.present();
          
    })
  }

  LoginFace(){
      this.angfire.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then((response) => {
      console.log('Login success with facebook' + JSON.stringify(response));
      let currentuser = {
          email: response.auth.displayName,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        this.navCtrl.pop();
      }).catch((error) => {
        console.log(error);
    })
  }

  
  LoginGit(){
      this.angfire.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup
    }).then((response) => {
      console.log('Login success with GitHub' + JSON.stringify(response));
      let currentuser = {
          email: response.auth.displayName,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        this.navCtrl.pop();

      }).catch((error) => {
        console.log(error);
    })
                  this.navCtrl.push(Grid);

  }


  Register(){

    this.navCtrl.push(Register);
  }

  
  
  LoginGoogle(){
      this.angfire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then((response) => {
      console.log('Login success with Google+' + JSON.stringify(response));
      let currentuser = {
          email: response.auth.displayName,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        this.navCtrl.pop();
      }).catch((error) => {

        console.log(error);
    })
  }
}