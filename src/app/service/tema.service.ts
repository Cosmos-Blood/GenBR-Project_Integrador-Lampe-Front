import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TemaModel } from '../model/TemaModel';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAllTemas() :Observable<TemaModel[]>{
    return this.http.get<TemaModel[]>("https://energylampe.herokuapp.com/api/v1/tema", this.token)

  }
  postTema(tema: TemaModel) :Observable<TemaModel>{
    return this.http.post<TemaModel>("https://energylampe.herokuapp.com/api/v1/tema/salvar", tema, this.token)
  }
}
