import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(doc => {
      console.log('la promesa termino en ', doc)
    }).catch(err => {
      console.log(err);
    })

  }

  contarTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
        contador++;
      }, 100)
    });
  }
  ngOnInit() {

  }

}
