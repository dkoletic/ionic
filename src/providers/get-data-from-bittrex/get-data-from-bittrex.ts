import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the GetDataFromBittrexProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetDataFromBittrexProvider {

  server: string;

  constructor(public http: Http) {
    console.log('Hello GetDataFromBittrexProvider Provider');
  }

  // Get JSON
  getAllCoinsFromBttrx() {
    let URL = "https://bittrex.com/api/v1.1/public/getmarketsummaries";
    return this.http.get(URL)
    .map( (res) => res.json());
  }

}
