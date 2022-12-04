import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticaService {

  private currentUserSource = new ReplaySubject<any>(1);
  currentUSer$ = this.currentUserSource.asObservable();

  constructor() { }

  private Autenticado: boolean = false;

  public DefineToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  public ObterToken() {
    return sessionStorage.getItem('token');
  }

  public LimparToken() {
    sessionStorage.removeItem('token');
  }

  public getCurrentUser() {
    var text = localStorage.getItem('user');
    var texto = text?.substring(1, text.length - 1)
    return texto;
  }

  public setCurrenteUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  public isAtivado(value: string) {
    sessionStorage.setItem('isLogado', value);
  }

  public isAtivadoRetorno() {
    return sessionStorage.getItem('isLogado');
  }


  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('value');
    localStorage.removeItem('produtos');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('isLogado');

    this.currentUserSource.next(null);
    this.currentUserSource.complete();
  }

  public DefineItem(item: string) {
    localStorage.setItem('value', item);
  }

  public PegaItem() {
    return localStorage.getItem('value');
  }

  public produtos(obj: any) {
    localStorage.setItem('produtos', JSON.stringify(obj));
  }

  public obterProdutos() {
    return localStorage.getItem('produtos');
  }

}
