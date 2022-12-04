import { ProdSelecionado } from './../model/ProdSelecionado';
import { Produtos } from './../model/Produtos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ObterCarrinho } from '../model/obterCarrinho';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  private readonly URL = environment["endPointProdutos"];
  private readonly URL2 = environment["endPointCarregamentoProdutos"];


  retornaProdutosQuente(){
    // return this.http.get<Produtos[]>('https://localhost:5001/api/v1.0/Produtos/ProdutoQuente');
    return this.http.get<Produtos[]>(this.URL2 + 'ProdutoQuente');
  }

  retornaProdutosFrio(){
    // return this.http.get<Produtos[]>('https://localhost:5001/api/v1.0/Produtos/ProdutoFrio');
    return this.http.get<Produtos[]>(this.URL2 + 'ProdutoFrio');
  }

  adicionaCarrinho(obj: ProdSelecionado){
    // return this.http.post<any>('https://localhost:5001/api/v1.0/ProdutosCarrinho/SelecionaProduto', obj);
    return this.http.post<any>(this.URL + 'SelecionaProduto', obj);
  }

  ObterProdSelecionadoQuente(obj: any){
    // return this.http.get<ProdSelecionado>('https://localhost:5001/api/v1.0/ProdutosCarrinho/ObterProdSelecionadoQuente?user=' + obj);
    return this.http.get<ProdSelecionado>(this.URL + 'ObterProdSelecionadoQuente?user=' + obj);
  }

  ObterProdSelecionadoFrio(obj: any){
    // return this.http.get<ProdSelecionado>('https://localhost:5001/api/v1.0/ProdutosCarrinho/ObterProdSelecionadoFrio?user=' + obj);
    return this.http.get<ProdSelecionado>(this.URL + 'ObterProdSelecionadoFrio?user=' + obj);
  }

  ObterProdSelecionado(obj: any){
    // return this.http.get<ProdSelecionado>('https://localhost:5001/api/v1.0/ProdutosCarrinho/ObterProdSelecionado?user=' + obj);
    return this.http.get<ProdSelecionado>(this.URL + 'ObterProdSelecionado?user=' + obj);
  }

  obterCalculo(obj: any)
  {
    // return this.http.get<any>('https://localhost:5001/api/v1.0/ProdutosCarrinho/CalculoCarrinho?user=' + obj);
    return this.http.get<any>(this.URL + 'CalculoCarrinho?user=' + obj);
  }

  DeleteProduto(cdProduto: any, user: any){
    // return this.http.delete<any>('https://localhost:5001/api/v1.0/ProdutosCarrinho/DeteleProduto?Cod_Produto=' + cdProduto + '&usuario=' + user);
    return this.http.get<any>(this.URL + 'DeteleProduto?Cod_Produto=' + cdProduto + '&usuario=' + user);
  }


  //https://localhost:44308/api/v1.0/Produtos/ObterTodosProdutos

  //http://localhost:5000/api/v1.0/Produtos/ObterTodosProdutos


}
