import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {} 
  token ={
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
  getUsuarioById(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`https://energylampe.herokuapp.com/api/v1/usuario/${id}`, this.token)

  }
}
