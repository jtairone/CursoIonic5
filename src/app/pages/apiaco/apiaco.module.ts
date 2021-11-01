import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiacoPageRoutingModule } from './apiaco-routing.module';

import { ApiacoPage } from './apiaco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiacoPageRoutingModule
  ],
  declarations: [ApiacoPage]
})
export class ApiacoPageModule {}
