import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';



@Component({
  selector: 'app-texttospeech',
  templateUrl: './texttospeech.page.html',
  styleUrls: ['./texttospeech.page.scss'],
})
export class TexttospeechPage implements OnInit {

  textoASerFalado: any;
  velocidade: any = 0.75;
  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
  }
  falar(){
    this.tts.speak({
      text: this.textoASerFalado,
      locale: 'pt-BR',
      rate: this.velocidade
    })
    .then(() => {
      console.log('success');
    })
    .catch((err) => {
      console.log(err);
    });

  }

}
