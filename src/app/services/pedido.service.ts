import { Injectable } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/quotes
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

obterDadosPedido(f, token){
  const headers = new HttpHeaders().set('x-access-token', token);
  const url = 'http://localhost:21262/pedidos/'+f;
  return this.http.get(url, {headers}).toPromise();
}

updatePedido(p, s){
 const headers = new HttpHeaders().set('Content-Type', 'application/json');
 headers.set('Accept', 'text/javascript');
 const options = { headers };
 const body = {
  cod: s
  };
  const url = 'http://localhost:21262/pedidos/'+p;
  return this.http.put(url, body, options).toPromise();

}

}
