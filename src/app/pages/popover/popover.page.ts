import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInternoComponent } from 'src/app/componentes/popover-interno/popover-interno.component';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(e) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInternoComponent,
      cssClass: 'my-custom-class',
      event: e,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
