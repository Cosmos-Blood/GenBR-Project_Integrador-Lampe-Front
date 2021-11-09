import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  cadastrar(usuarioModel: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(
      'https://energylampe.herokuapp.com/api/v1/usuario/cadastrar',
      usuarioModel
    );
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(
      'https://energylampe.herokuapp.com/api/v1/usuario/login',
      usuarioLogin
    );
  }

}
