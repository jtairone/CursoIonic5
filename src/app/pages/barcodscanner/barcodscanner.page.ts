import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-barcodscanner',
  templateUrl: './barcodscanner.page.html',
  styleUrls: ['./barcodscanner.page.scss'],
})
export class BarcodscannerPage implements OnInit {

  codigo: any;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }
  lercod(){
    this.barcodeScanner.scan().then(barcodeData => {
      //console.log(barcodeData.text);
      this.codigo = barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });

  }

}
