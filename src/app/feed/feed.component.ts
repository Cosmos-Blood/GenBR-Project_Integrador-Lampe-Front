import { Component, OnInit } from '@angular/core';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { environment } from 'src/environments/environment.prod';

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

  constructor(private auth: AuthService, private temaService: TemaService, private postagemService: PostagemService) { }

  ngOnInit(){
    window.scroll(0,0)
  }
   getAllTemas(){
     this.temaService.getAllTemas().subscribe((resp: TemaModel[])=>{
      this.listaDeTemas = resp
      console.log(this.listaDeTemas)
     })
   }
   postTema(){
     this.temaService.postTema(this.tema).subscribe((resp: TemaModel)=>{
      this.tema = resp
     })
   }
   postPostagem(){
     this.tema.id = this.idTema
     this.postagem.temaPostagem = this.tema
     this.usuario.id = this.idUsuario
     this.postagem.usuarioPostagem = this.usuario
     this.postagemService.postPostagem(this.postagem).subscribe((resp: PostagemModel)=>{
       this.postagem = resp
       alert("Postagem efetuada!")
       this.postagemService.getAllPostagens()

     })
   }
}
