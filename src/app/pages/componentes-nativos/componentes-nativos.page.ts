import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes-nativos',
  templateUrl: './componentes-nativos.page.html',
  styleUrls: ['./componentes-nativos.page.scss'],
})
export class ComponentesNativosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  showPage(url){
    this.navCtrl.navigateForward(url);
  }
  showPage2(url){
    this.navCtrl.navigateForward(url);
  }
  showPage3(url){
    this.navCtrl.navigateForward(url);
  }
  showPage4(url){
    this.navCtrl.navigateForward(url);
  }

}
