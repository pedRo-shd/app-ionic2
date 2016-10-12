import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ProviderService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProviderService {

  constructor(private http: Http) {}

  getCep(cep: string) : Promise<Response> {
    return this.http.get('http://viacep.com.br/ws/' + cep.trim() + '/json/').toPromise();

  }

}
