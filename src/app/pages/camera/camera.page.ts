import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  foto: any;
  constructor(private cameraCt: Camera) { }

  ngOnInit() {
  }
  tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.cameraCt.DestinationType.DATA_URL,
      encodingType: this.cameraCt.EncodingType.JPEG,
      mediaType: this.cameraCt.MediaType.PICTURE
    };

    this.cameraCt.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     const base64Image = 'data:image/jpeg;base64,' + imageData;
     this.foto = base64Image;
    }, (err) => {
     // Handle error
       console.log('Não foi possivel tirar a foto');
    });

  }

}
