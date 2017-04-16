import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Grid } from '../pages/grid/grid';
import { Trivia } from '../pages/trivia/trivia';
import { Autor } from '../pages/autor/autor';
import { TriviaUno } from '../pages/triviaUno/triviaUno';
import { TriviaDos } from '../pages/triviaDos/triviaDos';
import { TriviaTres } from '../pages/triviaTres/triviaTres';
import { TriviaCuatro } from '../pages/triviaCuatro/triviaCuatro';
import { TriviaCinco } from '../pages/triviaCinco/triviaCinco';
import { TriviaSeis } from '../pages/triviaSeis/triviaSeis';
import { TriviaSiete } from '../pages/triviaSiete/triviaSiete';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Trivia', component: Trivia },
      { title: 'Autor', component: Autor },
     /* { title: 'Register', component: Register },*/
      { title: 'Lista de Usuarios', component: Grid },
      { title: 'My First List', component: ListPage },
      { title: 'Desloguearse', component: Login },
      { title: 'TriviaUno', component: TriviaUno }

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
