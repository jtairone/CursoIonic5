import { CepService } from './../../services/cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  cep = '59150630';
  resultado: any = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    ddd: ''
  };
  constructor(private cepservice : CepService) { }

  ngOnInit() {
  }
  consultarCep(){
      this.cepservice.obterEndereco(this.cep)
      .then((json)=>{
        //console.log(json);
        this.resultado = json;
      })
      .catch((erro)=>{
        console.log(erro);
      });
  }
  limpar(){
    this.resultado = {
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
      ibge: '',
      ddd: ''
    };
  }

}
