import { Component, OnInit } from '@angular/core';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  listaDeTemas: TemaModel[];
  tema: TemaModel = new TemaModel();
  listaDePostagens: PostagemModel[];
  postagem: PostagemModel = new PostagemModel();
  usuario: UsuarioModel = new UsuarioModel();
  idUsuario = environment.id;
  idTema: number;

  constructor(
    private auth: AuthService,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private router: Router
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

    this.getAllPostagens();
    this.getAllTemas();

    this.refreshToken();
    
    this.temaService.refreshToken();
    this.postagemService.refreshToken();
    this.auth.refreshToken();
  }
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };
  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }
  
  getAllPostagens() {
    this.postagemService
      .getAllPostagens()
      .subscribe((resp: PostagemModel[]) => {
        this.listaDePostagens = resp;
      });
  }

  voltarAoTopo(){
    window.scroll(0, 0);
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: TemaModel) => {
      this.tema = resp;
    });
  }

  getAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: TemaModel[]) => {
      this.listaDeTemas = resp;
    });
  }
  postTema() {
    this.temaService.postTema(this.tema).subscribe((resp: TemaModel) => {
      this.tema = resp;
    });
  }
  postPostagem() {
    this.tema.id = this.idTema;
    this.postagem.temaPostagem = this.tema;
    this.usuario.id = this.idUsuario;
    this.postagem.usuarioPostagem = this.usuario;
    this.postagem.privacidade = "Publico"
    this.postagemService
      .postPostagem(this.postagem)
      .subscribe((resp: PostagemModel) => {
        this.postagem = resp;
        this.getAllPostagens();
        this.postagem = new PostagemModel()
        alert('Postagem efetuada!');
      });
  }
}
