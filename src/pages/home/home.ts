import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GetDataFromBittrexProvider } from '../../providers/get-data-from-bittrex/get-data-from-bittrex';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins: Array<any>;

  constructor(public navCtrl: NavController, public getDataFromBittrexProvider:GetDataFromBittrexProvider) {

  }

  ionViewDidLoad() {
    this.getAllCoinsFromBttrx();
  }

  ionViewDidEnter() {
      console.log('ionViewDidEnter homePage');
  }

  getAllCoinsFromBttrx() {
    this.getDataFromBittrexProvider.getAllCoinsFromBttrx().subscribe(
      // Success
      (res) => {
        this.coins = res.result;
        console.log("AllCoins: %o", this.coins);
        return this.coins;
      },
      // Error
      (err) => {
        alert("greška");
      }
    );
  }


  //chart

  // lineChart
 public lineChartData:Array<any> = [
   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
 ];
 public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 public lineChartOptions:any = {
   responsive: true
 };
 public lineChartColors:Array<any> = [
   { // grey
     backgroundColor: 'rgba(148,159,177,0.2)',
     borderColor: 'rgba(148,159,177,1)',
     pointBackgroundColor: 'rgba(148,159,177,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
   },
   { // dark grey
     backgroundColor: 'rgba(77,83,96,0.2)',
     borderColor: 'rgba(77,83,96,1)',
     pointBackgroundColor: 'rgba(77,83,96,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(77,83,96,1)'
   },
   { // grey
     backgroundColor: 'rgba(148,159,177,0.2)',
     borderColor: 'rgba(148,159,177,1)',
     pointBackgroundColor: 'rgba(148,159,177,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
   }
 ];
 public lineChartLegend:boolean = true;
 public lineChartType:string = 'line';

 public randomize():void {
   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
   for (let i = 0; i < this.lineChartData.length; i++) {
     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
     }
   }
   this.lineChartData = _lineChartData;
 }

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }



}
