/* Este é o arquivo que inicializa nossa aplicação*/
import { Component } from '@angular/core';
import { ionicBootstrap, Platform, MenuController} from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';
import {MenuTestPage } from './pages/menu-test/menu-test';

/* Este template */
@Component({
  /* O ion-nav que exibe nossa rootPage e é declarada na class export class
  MyApp*/
  templateUrl: 'build/app.html'
})
export class MyApp {
  //Objeto criado com atributos para paginas .html
  pages: Array<{component: any, title: string, icon: string}>;
  rootPage: any = HomePage;

/* Este construtor faz a verificação se a plataforma ja está disponivel
fala que o StatusBar é um estilo default */
  constructor(public platform: Platform, private menuCtrl: MenuController) {

    this.pages = [
      //Valores que serao repassados para meu objeto pages: Array
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: MenuTestPage, title: 'Menu Test', icon: 'menu'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  openPage(page: any, menuSide: string) : void {
    this.rootPage = page.component
    this.menuCtrl.close(menuSide);
  }

  menuOpened() : void {
    console.log('Abriu');
  }

}
/* Aqui chama o metodo ionicBootstrap(MyApp) este é o atributo que inicializa
nossa apliação*/
ionicBootstrap(MyApp, [], {
  menuType: 'push',
  platforms: {
    ios: {
      menuType: 'overlay',
    }
  }
});
