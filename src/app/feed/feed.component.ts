import { Component, OnInit } from '@angular/core';
import { TemaModel } from '../model/TemaModel';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  listaDeTemas: TemaModel[]
  tema: TemaModel = new TemaModel()

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
   
}
