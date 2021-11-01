import { Injectable } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/quotes
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

obterEndereco(cep){
const url = 'https://viacep.com.br/ws/'+ cep +'/json/';
return this.http.get(url).toPromise();
}


}
