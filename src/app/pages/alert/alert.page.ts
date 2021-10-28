import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { async } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }
  async alert(){
      const alert = await this.alertCtrl.create({
        header: 'Alerta',
        subHeader: 'Subtitulo',
        message: 'Mensagem do alert',
        buttons: ['OK']
      });
      alert.present();
  }
 async multiple(){
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Subtitulo',
      message: 'Mensagem do alert',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });
    alert.present();
  }

async confirme(){
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    message: 'Message <strong>text</strong>!!!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'danger',
        handler: (blah) => {
          console.log('Confirmado Cancel: blah');
        }
      }, {
        text: 'OK',
        cssClass: 'success',
        handler: () => {
          console.log('Confirm OK!');
        }
      }
    ]
  });
  await alert.present();
}

async prompt(){
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Acesso Restrito',
    inputs: [
      {
        name: 'email',
        type: 'text',
        placeholder: 'Informe seu e-mail'
      },
      {
        name: 'senha',
        type: 'password',
        placeholder: 'Informe sua senha'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (form) => {
          //console.log(form.senha);
          if(form.email == 'tairone' && form.senha == '123'){
              console.log('Acesso Permitido!');
          }else{
            console.log('Acesso Negado!');
          }
        }
      }
    ]
  });

  await alert.present();
}

async radio(){
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Radio',
    inputs: [
      {
        name: 'radio1',
        type: 'radio',
        label: 'Radio 1',
        value: 'value1',
        handler: (v) => {
          console.log('Radio 1 selected value= '+v.value);
        },
        checked: true
      },
      {
        name: 'radio2',
        type: 'radio',
        label: 'Radio 2',
        value: 'value2',
        handler: () => {
          console.log('Radio 2 selected');
        }
      },
      {
        name: 'radio3',
        type: 'radio',
        label: 'Radio 3',
        value: 'value3',
        handler: () => {
          console.log('Radio 3 selected');
        }
      },
      {
        name: 'radio4',
        type: 'radio',
        label: 'Radio 4',
        value: 'value4',
        handler: () => {
          console.log('Radio 4 selected');
        }
      },
      {
        name: 'radio5',
        type: 'radio',
        label: 'Radio 5',
        value: 'value5',
        handler: () => {
          console.log('Radio 5 selected');
        }
      },
      {
        name: 'radio6',
        type: 'radio',
        label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
        value: 'value6',
        handler: () => {
          console.log('Radio 6 selected');
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
    ]
  });
  await alert.present();
}

async checkbox(){
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Checkbox',
    inputs: [
      {
        name: 'checkbox1',
        type: 'checkbox',
        label: 'Checkbox 1',
        value: 'value1',
        handler: () => {
          console.log('Checkbox 1 selected');
        },
        checked: true
      },

      {
        name: 'checkbox2',
        type: 'checkbox',
        label: 'Checkbox 2',
        value: 'value2',
        handler: () => {
          console.log('Checkbox 2 selected');
        }
      },

      {
        name: 'checkbox3',
        type: 'checkbox',
        label: 'Checkbox 3',
        value: 'value3',
        handler: () => {
          console.log('Checkbox 3 selected');
        }
      },

      {
        name: 'checkbox4',
        type: 'checkbox',
        label: 'Checkbox 4',
        value: 'value4',
        handler: () => {
          console.log('Checkbox 4 selected');
        }
      },

      {
        name: 'checkbox5',
        type: 'checkbox',
        label: 'Checkbox 5',
        value: 'value5',
        handler: () => {
          console.log('Checkbox 5 selected');
        }
      },

      {
        name: 'checkbox6',
        type: 'checkbox',
        label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
        value: 'value6',
        handler: () => {
          console.log('Checkbox 6 selected');
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
    ]
  });

  await alert.present();
}

}
