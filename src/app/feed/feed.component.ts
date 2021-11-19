import { Component, OnInit } from '@angular/core';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  listaDeTemas: TemaModel[]
  tema: TemaModel = new TemaModel()
  listaDePostagens: PostagemModel[]
  postagem: PostagemModel = new PostagemModel()
  usuario: UsuarioModel = new UsuarioModel()
  idUsuario = environment.id
  idTema: number

  constructor(private auth: AuthService, private temaService: TemaService, private postagemService: PostagemService, private router: Router) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

    this.getAllPostagens();
    this.getAllTemas();

    this.temaService.refreshToken()
    this.postagemService.refreshToken()
    this.auth.refreshToken()
  }
  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: PostagemModel[]) => {
      this.listaDePostagens = resp
    })
  }
  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: TemaModel) => {
      this.tema = resp
    })
  }

  getAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: TemaModel[]) => {
      this.listaDeTemas = resp
    })
  }
  postTema() {
    this.temaService.postTema(this.tema).subscribe((resp: TemaModel) => {
      this.tema = resp
    })
  }
  postPostagem() {
    this.tema.id = this.idTema
    this.postagem.temaPostagem = this.tema
    this.usuario.id = this.idUsuario
    this.postagem.usuarioPostagem = this.usuario
    this.postagemService.postPostagem(this.postagem).subscribe((resp: PostagemModel) => {
      this.postagem = resp
      this.getAllPostagens()
      alert("Postagem efetuada!")
    })
  }
}
