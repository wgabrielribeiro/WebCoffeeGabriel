import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DadosCadastraisService {

  private readonly baseURL = environment["endPointCadastro"];

  constructor(private http: HttpClient) { }

  fnMostrarDados(objeto: any){
    return this.http.get<any>(this.baseURL + 'ConsultaCadastro?pUsuario=' + objeto);
  }

  fnAtualizarDados(objeto: any){
    return this.http.post<any>(this.baseURL + 'AtualizaCadastro', objeto);
  }

}
