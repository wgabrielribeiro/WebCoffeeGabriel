import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RedefineSenhaService {

  private readonly baseURL = environment["endPointLogin"];


  constructor(private http: HttpClient) { }

  EfetuaResetUsuario(objeto: any)
  {
    return this.http.post<any>(this.baseURL + 'EfetuaReset', objeto);
  }

  SolicitaReset(objeto:any)
  {
    return this.http.post<any>(this.baseURL + 'SolicitaReset', objeto);
  }

}
