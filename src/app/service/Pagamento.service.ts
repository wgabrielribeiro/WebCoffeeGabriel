import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MetodoPagamento } from '../model/MetodoPagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private http: HttpClient) { }

  private readonly URL = environment["endPointProdutos"];

  fnMetodoPagamento(obj: MetodoPagamento) {
    // return this.http.post<any>('https://localhost:5001/api/v1.0/ProdutosCarrinho/FormadePagamento', obj);
    return this.http.post<any>(this.URL + 'FormadePagamento', obj);
  }

  fnApagarHistorico(obj: any) {
    //return this.http.post<any>('https://localhost:5001/api/v1.0/ProdutosCarrinho/DeleteprodutosComprados', obj);

    return this.http.post<any>(this.URL + 'DeleteprodutosComprados', obj);
  }

  fnMostrarHistorico(obj: any) {
    // return this.http.get<any>('https://localhost:5001/api/v1.0/ProdutosCarrinho/produtosComprados?usuario=' + obj);
    return this.http.get<any>(this.URL + 'produtosComprados?usuario=' + obj);
  }

}
