import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  cor: any = 'success';
  constructor() { }

  ngOnInit() {
  }
  clicarCard(){
    alert('Ação Clique no card, Mudar Cor para Verde!!');
    this.cor = 'danger';

  }

}
