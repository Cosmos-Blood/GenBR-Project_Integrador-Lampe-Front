import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PostagemModel } from '../model/PostagemModel';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }
  getAllPostagens(): Observable<PostagemModel[]>{
    return this.http.get<PostagemModel[]>("https://energylampe.herokuapp.com/api/v1/postagem", this.token)

  }
  getPostagemById(id: number): Observable<PostagemModel>{
    return this.http.get<PostagemModel>(`https://energylampe.herokuapp.com/api/v1/postagem/${id}`, this.token)
  }
  postPostagem(postagem: PostagemModel): Observable<PostagemModel>{
    return this.http.post<PostagemModel>("https://energylampe.herokuapp.com/api/v1/postagem/salvar", postagem, this.token)
  }
  
}
