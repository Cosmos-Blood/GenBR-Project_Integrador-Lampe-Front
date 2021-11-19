import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/UsuarioModel';
import { RodapeComponent } from 'src/app/rodape/rodape.component';
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

  constructor(private auth: AuthService, private router: Router) {}

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
    console.log(this.usuario);
    this.auth.atualizar(this.usuario).subscribe(() => {
      alert('Usuário atualizado! Faça login novamente');
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
