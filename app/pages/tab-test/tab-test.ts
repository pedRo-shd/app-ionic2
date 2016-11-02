import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeTabPage } from './../home-tab/home-tab';
import { ContatosTabPage } from './../contatos-tab/contatos-tab';
/*
  Generated class for the TabTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tab-test/tab-test.html',
})
export class TabTestPage {
  homePage:any = HomeTabPage;
  contatosPage:any = ContatosTabPage;

  constructor(private navCtrl: NavController) {

  }
}
