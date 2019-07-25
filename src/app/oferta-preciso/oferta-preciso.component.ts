import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-oferta-preciso',
  templateUrl: './oferta-preciso.component.html',
  styleUrls: ['./oferta-preciso.component.scss']
})
export class OfertaPrecisoComponent implements OnInit {
  days: any[] = [];
  constructor() {
      for (let index = 1; index < 30; index++) {
       this.days.push({value:index,viewValue:index})
        
      }

   }

  ngOnInit() {
  }
  onSubmit(formulario: NgForm): void {
    if (!formulario.valid) {
      return;
    }
//this.simulacion.tipoTablaAmortizacion = this.sistema;
    //this.simulacion.operacion = OPERACIONES_CREDITICIAS.CONSTANTE_CREAR_OPERACION;
   // this.simulacion.numeroCuenta = this.cuentaDesembolso;
   // this.crearOperacion();
  }

}
