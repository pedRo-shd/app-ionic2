/* Este é o arquivo que inicializa nossa aplicação*/
import { Component } from '@angular/core';
import { ionicBootstrap, Platform, MenuController} from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { ProviderService } from './providers/provider-service/provider-service';


import { HomePage } from './pages/home/home';
import { MenuTestPage } from './pages/menu-test/menu-test'
import { GeneratedTestPage } from './pages/generated-test/generated-test';
import { AlertPage } from './pages/alert/alert';
import { ButtonPage } from './pages/button/button';
import { CardPage } from './pages/card/card';
import { IconTestPage } from './pages/icon-test/icon-test';
import { InputsPage } from './pages/inputs/inputs';
import { ListTestPage } from './pages/list-test/list-test';

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
      {component: MenuTestPage, title: 'Menu Test', icon: 'menu'},
      {component: GeneratedTestPage, title: 'Generated Test', icon: 'albums'},
      {component: AlertPage, title: 'Alert', icon: 'alert'},
      {component: ButtonPage, title: 'Buttons', icon: 'arrow-dropright-circle'},
      {component: CardPage, title: 'Card', icon: 'card'},
      {component: IconTestPage, title: 'Icon', icon: 'apps'},
      {component: InputsPage, title: 'Entrar', icon: 'contact'},
      {component: ListTestPage, title: 'Lista', icon: 'menu'}
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
ionicBootstrap(MyApp, [ProviderService], {
  menuType: 'push',
  platforms: {
    ios: {
      menuType: 'overlay',
    }
  }
});
