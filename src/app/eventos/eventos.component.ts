import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.scroll(0, 0)
    // if (environment.token == '') {
    //   this.router.navigate(['/entrar']);
    // }

  }

}
