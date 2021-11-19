import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  imgUsuario: string = environment.foto;

  constructor(public auth: AuthService) { }

  ngOnInit(){
    window.scroll(0,0)
    this.auth.refreshToken()
  }

  sair(){
    environment.token = ""
    environment.senhaUsuario = ""
    environment.id = 0
    environment.foto = ""
    environment.nomeUsuario = ""
    environment.emailUsuario = ""
  }

}
