import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodscannerPageRoutingModule } from './barcodscanner-routing.module';

import { BarcodscannerPage } from './barcodscanner.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodscannerPageRoutingModule
  ],
  declarations: [BarcodscannerPage],
  providers: [BarcodeScanner]
})
export class BarcodscannerPageModule {}
