import { Component, OnInit } from '@angular/core';
import { Storage  } from '@ionic/storage';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {
  name: any;
  nomebd: any;
  dtnasbd: any;
  niver: any;
  url: any;
  port: any;
  storageUser: any;
  storageAcesso: any;
  constructor() {
    const storage = new Storage({
      name: 'bancoDados',
      storeName: 'user'
    });
    const storage2 = new Storage({
      name: 'bancoDados',
      storeName: 'acesso'
    });
    this.storageUser = storage;
    this.storageAcesso = storage2;
  }

 async ngOnInit() {
    this.storageUser.create();
    this.storageAcesso.create();
  }
  async save(){
    await this.storageUser.set('name', this.name);
    await this.storageUser.set('nasc', this.niver);
  }
  async acesso(){
      await this.storageAcesso.set('url', this.url);
      await this.storageAcesso.set('port', this.port);
  }
  async consulta(){
      this.nomebd = await this.storageUser.get('name');
      this.dtnasbd = await this.storageUser.get('nasc');
  }

}
