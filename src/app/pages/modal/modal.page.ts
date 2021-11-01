import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInternoComponent } from 'src/app/componentes/modal-interno/modal-interno.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async openmodal(){
    const modal = await this.modalCtrl.create({
      component: ModalInternoComponent,
      componentProps: {nome: 'Tairone Morais' }
    });
    return await modal.present();
  }

}
