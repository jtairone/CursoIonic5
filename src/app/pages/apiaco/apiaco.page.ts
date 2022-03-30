import { PedidoService } from './../../services/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apiaco',
  templateUrl: './apiaco.page.html',
  styleUrls: ['./apiaco.page.scss'],
})
export class ApiacoPage implements OnInit {

  filial: any = '2';
  retorno: any;
  confe = localStorage.getItem('coduser');
  token: any = localStorage.getItem('token');
  constructor(private pedido: PedidoService) {

    this.pedido.obterDadosPedido(this.filial, this.token)
    .then((json)=>{
      this.retorno = json;
    })
    .catch((erro)=>{
      console.log(erro);
    });

   }

  ngOnInit() {

  }
 clickCard(item){
    if(item.CODFUNCSEP){
      alert('pedido já separado');
    }else{
      this.pedido.updatePedido(item.PEDIDO, this.confe)
       .then((json)=>  {
          alert('Atualizado com sucesso');
      })
      .catch((erro)=>{
        alert(erro);
      });
    }
  }

  atualizar(e){
    this.consultar();
    e.target.complete();
  }

  consultar(){
     this.pedido.obterDadosPedido(this.filial, this.token)
    .then((json)=>{
      this.retorno = json;
    })
    .catch((erro)=>{
      console.log(erro);
    });
  }
}
