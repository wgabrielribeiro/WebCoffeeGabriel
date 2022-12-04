import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private readonly baseURL = environment["endPointCadastro"];

  constructor(private http: HttpClient) { }


  CadastraUsuario(objeto: any) {
    return this.http.post<any>(this.baseURL + 'Cadastro', objeto);
  }

  CadastraDadosCadastrais(objeto: any) {
    //return this.http.post<any>('http://localhost:5000/api/Cadastros/InsercoesCadastro', objeto);

    return this.http.post<any>(this.baseURL + 'InsercoesCadastro', objeto);
  }
}
