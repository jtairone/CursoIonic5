import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
atualizar(e){
  console.log('Usuário solicitou a atualização');

  setTimeout(()=>{
    console.log('lista atualizada com sucesso!')
    e.target.complete();
  }, 2000);
}
}
