import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { EventosComponent } from './eventos/eventos.component';
import { FeedComponent } from './feed/feed.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: "entrar", component: EntrarComponent },
  { path: "cadastrar", component: CadastrarComponent },
  { path: "feed", component: FeedComponent },
  { path: "usuario-edit", component: UsuarioEditComponent },
  { path: "postagem-edit/:id", component: PostagemEditComponent },
  { path: "postagem-delete/:id", component: PostagemDeleteComponent },
  { path: "eventos", component: EventosComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "inicio", component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
