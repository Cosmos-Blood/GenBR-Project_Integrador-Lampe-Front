import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  imgUsuario: string = environment.foto;
  nomeUsuario: string = environment.nomeUsuario;
  cor: string = ''

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.auth.refreshToken();
  }

  alteraCor(){
    if(this.router.url === '/inicio'){
      this.cor = 'corinicio'
      return true
    } else {
      this.cor = 'cor'
      return true
    }
  }

  scrollInicio(){
    window.scroll(0,0)
  }

  scrollLampe(){
    window.scroll(0, 500)
  }

  scrollODS(){
    window.scroll(0,1200)
  }

  scrollTec(){
    window.scroll(0,2000)
  }
  
  scrollEquipe(){
    window.scroll(0,2800)
  }

  scrollContato(){
    window.scroll(0,5000)
  }

  sair() {
    environment.token = '';
    environment.senhaUsuario = '';
    environment.id = 0;
    environment.foto = '';
    environment.nomeUsuario = '';
    environment.emailUsuario = '';
  }
}
