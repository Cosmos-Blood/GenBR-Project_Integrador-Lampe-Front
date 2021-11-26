import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/UsuarioModel';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css'],
})
export class UsuarioEditComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  confirmarSenha: string;
  usuarioId = environment.id;

  constructor(private auth: AuthService, private router: Router, private alerta: AlertasService) {}

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

    this.auth.refreshToken();
    this.getUsuarioById();
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  getUsuarioById() {
    this.auth.getUsuarioById(this.usuarioId).subscribe((resp: UsuarioModel) => {
      this.usuario = resp;
      this.usuario.senhaUsuario = '';
    });
  }

  atualizar() {
    this.usuario.id = this.usuarioId;
    if (this.usuario.senhaUsuario != this.confirmarSenha) {
      this.alerta.showAlertType('As senhas estão diferentes!');
    } else {
      this.auth.atualizar(this.usuario).subscribe(() => {
        this.alerta.showAlertType('Usuário atualizado! Faça login novamente');
        environment.id = 0;
        environment.nomeUsuario = '';
        environment.emailUsuario = '';
        environment.foto = '';
        environment.senhaUsuario = '';
        environment.token = '';
        this.router.navigate(['/entrar']);
      });
    }
  }
}
