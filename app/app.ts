/* Este é o arquivo que inicializa nossa aplicação*/
import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';

/* Este template */
@Component({
  /* O ion-nav que exibe nossa rootPage e é declarada na class export class
  MyApp*/
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  /* Importa a pagina HomePage*/
  rootPage: any = HomePage;

/* Este construtor faz a verificação se a plataforma ja está disponivel
fala que o StatusBar é um estilo default */
  constructor(public platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

/* Aqui chama o metodo ionicBootstrap(MyApp) este é o atributo que inicializa
nossa apliação*/
ionicBootstrap(MyApp);
