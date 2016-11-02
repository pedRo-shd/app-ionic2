import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the ModalLoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-login/modal-login.html',
})
export class ModalLoginPage {

  user:any = {};

  constructor(public nav: NavController, public view: ViewController) {

  }

  logar() {
     this.view.dismiss(this.user); /* ESSE COMANDO SERVE PARA RETORNAR
     OS DADOS DO USUARIO*/
   }

   close() {
     this.view.dismiss();
   }

 }
