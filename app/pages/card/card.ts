import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavigationTestPage } from './../navigation-test/navigation-test';
/*
  Generated class for the CardPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/card/card.html',
})
export class CardPage {

  constructor(public navCtrl: NavController) {

  }

  voltar() : void {
    this.navCtrl.pop(NavigationTestPage);
  }

}
