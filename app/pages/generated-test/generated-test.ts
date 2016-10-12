import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProviderService } from './../../providers/provider-service/provider-service';

@Component({
  templateUrl: 'build/pages/generated-test/generated-test.html',

})
export class GeneratedTestPage {

  constructor(public navCtrl: NavController, private providerService: ProviderService) {

  }

  buscarCep() : void {
    this.providerService.getCep('37950000')
      .then((res) => {
        let json = res.json();
        console.log(json);
      }).catch((err) => {
        console.log(err);
      })
      }

  }
