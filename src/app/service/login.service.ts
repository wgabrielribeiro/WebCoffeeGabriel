import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private readonly baseURL = environment["endPointLogin"];

constructor(private http: HttpClient) { }

LoginUsuario(objeto: any)
{
  return this.http.post<any>(this.baseURL + 'LoginUser', objeto);
}

ObterToken(objeto:any)
{
  var opt = {
    'headers':
    {
      'Authorization': 'Bearer ' + objeto
    }
  };

  return this.http.get<any>(this.baseURL + 'obterToken', opt);
}

}
