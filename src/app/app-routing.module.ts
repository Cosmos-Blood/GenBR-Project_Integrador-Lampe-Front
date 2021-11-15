import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FeedComponent } from './feed/feed.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:"sobre",component: SobreComponent},
  {path:"entrar",component: EntrarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: "feed", component: FeedComponent},
  {path: "postagem-edit/:id", component: PostagemEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
export class AppRoutingModule { }
