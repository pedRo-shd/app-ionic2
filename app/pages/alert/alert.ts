import { Component } from '@angular/core';
import { NavController, AlertController, Alert } from 'ionic-angular';

/*
  Generated class for the AlertPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/alert/alert.html',
})
export class AlertPage {

  constructor(private navCtrl: NavController, public alertCtrl: AlertController) {

  }
    showAlert(): void {
      let alert = this.alertCtrl.create ({
        title: 'Alert Teste',
        buttons: ['Ok', 'Cancel']
      });

      alert.present();
  }

}
