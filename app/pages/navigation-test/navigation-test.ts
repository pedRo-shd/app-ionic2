import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from './../card/card';

/*
  Generated class for the NavigationTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/navigation-test/navigation-test.html',
})
export class NavigationTestPage {

  constructor(public navCtrl: NavController) {

  }

  openPage() {
    this.navCtrl.push( CardPage );
  }

}
