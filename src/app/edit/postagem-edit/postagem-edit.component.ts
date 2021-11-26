import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostagemModel } from 'src/app/model/PostagemModel';
import { TemaModel } from 'src/app/model/TemaModel';
import { UsuarioModel } from 'src/app/model/UsuarioModel';
import { AlertasService } from 'src/app/service/alertas.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css'],
})
export class PostagemEditComponent implements OnInit {
  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private route: ActivatedRoute,
    private router: Router,
    private alerta: AlertasService
  ) {}

  usuario: UsuarioModel = new UsuarioModel();
  idUsuario: number = environment.id;

  postagem: PostagemModel = new PostagemModel();

  tema: TemaModel = new TemaModel();
  listaDeTemas: TemaModel[];
  idTema: number;

  ngOnInit() {
    window.scroll(0, 0);
    let id = this.route.snapshot.params['id'];
    this.findByIdPostagem(id);
    this.getAllTemas();

    this.postagemService.refreshToken();
    this.temaService.refreshToken();
  }

  findByIdPostagem(id: number) {
    this.postagemService
      .getPostagemById(id)
      .subscribe((resp: PostagemModel) => {
        this.postagem = resp;
      });
  }
  getAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: TemaModel[]) => {
      this.listaDeTemas = resp;
    });
  }
  getByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: TemaModel) => {
      this.tema = resp;
    });
  }
  atualizar() {
    this.postagem.temaPostagem = this.tema;
    this.postagemService
      .putPostagem(this.postagem)
      .subscribe((resp: PostagemModel) => {
        this.postagem = resp;
        this.alerta.showAlertType('Postagem atualizada!');
        this.router.navigate(['/feed']);
      });
  }
}
