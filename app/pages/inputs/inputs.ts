import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the InputsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/inputs/inputs.html',
})
export class InputsPage {

  login: string;
  senha: string;

  constructor(public alertCtrl: AlertController) {

  }

entrar () {
  let texto = ('Login: ' + this.login + ', Senha: ' + this.senha);
  let alert = this.alertCtrl.create({
    title: 'Entrando...',
    message: texto
  });
  alert.present();
  }
}
