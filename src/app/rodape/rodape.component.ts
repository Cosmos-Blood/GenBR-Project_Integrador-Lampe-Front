import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  isOkRoute(){
    if(this.router.url === '/feed'){
      return true;
    }
    return false
  }
}
