import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Grid } from '../pages/grid/grid';

import { Platform, MenuController, Nav, NavController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD6tTl8itJRC0Ut9VwvWeLePU52G57q6e4",
    authDomain: "twtransporte-f056f.firebaseapp.com",
    databaseURL: "https://twtransporte-f056f.firebaseio.com",
    projectId: "twtransporte-f056f",
    storageBucket: "twtransporte-f056f.appspot.com",
    messagingSenderId: "494776714776"
  };
  
  

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Login,
    Grid,
    Register
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Login,
    Grid,
    Register
  ],
  providers: [
    StatusBar,
    SplashScreen,
  
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
