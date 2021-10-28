import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  num  = 1;
  constructor() { }

  ngOnInit() {
  }
  salvar(){
    console.log('Salvar: '+this.num);
    this.num = this.num+1;
  }
}
