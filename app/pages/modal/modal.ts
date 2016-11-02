import { Component } from '@angular/core';
import { ModalController, Modal } from 'ionic-angular';
import { ModalLoginPage } from './../modal-login/modal-login';

@Component({
  templateUrl: 'build/pages/modal/modal.html',
})
export class ModalPage {

  constructor(public modalCtrl: ModalController) {

  }

  openModal() {
   let modal = this.modalCtrl.create(ModalLoginPage);
   modal.present();
  }



}
