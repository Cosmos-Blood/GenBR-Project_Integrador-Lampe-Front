import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

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

  atualizar(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.put<UsuarioModel>(
      'https://energylampe.herokuapp.com/api/v1/usuario/atualizar',
      usuario,
      this.token
    );
  }

  getUsuarioById(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(
      `https://energylampe.herokuapp.com/api/v1/usuario/${id}`,
      this.token
    );
  }

  logado() {
    let ok: boolean = false;

    if (environment.token != '') {
      ok = true;
    }
    if(this.router.url === '/inicio'){
      ok = true;
    }
    return ok;
  }

  divInicio(){
    let ok2: boolean = false;
    if(this.router.url === '/inicio'){
      ok2 = true;
    } 
    return ok2;
  }

  divFeed(){
    let ok3: boolean = true;
    if(this.router.url === '/inicio'){
      ok3 = false;
    }
    return ok3
  }

}
