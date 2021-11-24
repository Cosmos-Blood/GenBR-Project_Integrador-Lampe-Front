import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  imgUsuario: string = environment.foto
  listaDeTemas: TemaModel[];
  tema: TemaModel = new TemaModel();
  listaDePostagens: PostagemModel[];
  postagem: PostagemModel = new PostagemModel();
  usuario: UsuarioModel = new UsuarioModel();
  idUsuario = environment.id;
  idTema: number;

  constructor(
    private router: Router,
    private auth: AuthService,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }
    this.getAllPostagens();
    this.getAllTemas();
    this.findByIdUser();
  }

  getAllPostagens() {
    this.postagemService
      .getAllPostagens()
      .subscribe((resp: PostagemModel[]) => {
        this.listaDePostagens = resp;
      });
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

  findByIdUser() {
    this.auth.getUsuarioById(this.idUsuario).subscribe((resp: UsuarioModel) => {
      this.usuario = resp;
    });
  }
}
