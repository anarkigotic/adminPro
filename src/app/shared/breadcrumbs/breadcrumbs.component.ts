import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {


  titulo:string;
  constructor(private router: Router,private title:Title) {
   
    this.getDataRoute().subscribe((event) => {
      this.titulo = event.titulo;
      this.title.setTitle(this.titulo);
    });
        
  }

  ngOnInit() {
  }
  getDataRoute() {
   return this.router.events.
      pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => {
          return event.snapshot.firstChild === null;
        }),
        map((evento: ActivationEnd) => {
          return evento.snapshot.data
        })
      )
  }

}
