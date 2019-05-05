import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() {
    this.subscription = this.regresaObservable().pipe(
      retry(2),
      map(res => res.valor),
      filter(res => {
        if ((res % 2) === 1) {
          return true;
        } else {
          return false;
        }
      })
    ).subscribe(
      (data: any) => console.log(data),
      err => console.error(err),
      () => console.log("se termino la promesa")
    );
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    console.log("la pagina se va a cerrar");
    this.subscription.unsubscribe();

  }
  regresaObservable(): Observable<any> {
    let contador = 0;
    return new Observable(observador => {
      let intervalo = setInterval(() => {


        const salida = {
          valor: contador
        }
        contador++;
        observador.next(salida)
        // if (contador === 10) {
        //   clearInterval(intervalo);
        //   observador.complete()
        // }
        // if (contador === 2) {
        //   clearInterval(intervalo);
        //   console.log("error");
        //   observador.error('lo siento es un error')
        // }
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   console.log("error");
        //   observador.error('lo siento es un error')
        // }
      }, 1000);
    })

  }

}
