import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input('nombre') leyenda: string = 'Leyenda';
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() progreso: number = 50;
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {
    // console.log('leyenda c',this.leyenda);
    // console.log('progreso', this.progreso);

  }

  ngOnInit() {
    console.log('progresos', this.progreso);

  }

  cambiarValor(valor) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor <= 0) {
      this.progreso = 0;
      return;
    }
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  onChanges(evento) {
    // let elementHTML:any = document.getElementsByName('progreso')[0];

    if (evento >= 100) {
      this.progreso = 100;
    } else if (evento <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = evento;
    }
    // elementHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

}
