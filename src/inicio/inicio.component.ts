import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { SeguridadService } from '../../modulos/nucleo/servicios/seguridad.service';
import { Flujo } from '../../modulos/comun/clases/flujo';
import { CONSTANTES_CORE } from '../../modulos/nucleo/constantes/constantes-core';
import { URL_FLUJO_CUENTA } from '../../modulos/cuenta/constantes/url-flujo-cuenta';
import { URL_FLUJO_TDCP } from '../../modulos/tdc/constantes/url-flujo-tdc';
import { CONSTANTES_PRECISO } from '../../modulos/agw-preciso/constantes/constantes-preciso';
import { isNullOrUndefined } from 'util';

/**
 *
 *
 * @export
 * @class InicioComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {
  private _flujos: Flujo[];
  flujoVinculacion = CONSTANTES_CORE.CODIGO_FLUJO.VINCULACION;
  flujoTarjeta = CONSTANTES_CORE.CODIGO_FLUJO.TARJETA_CP;
  flujoCredito = CONSTANTES_CORE.CODIGO_FLUJO.CREDITO;

  /**
   *Creates an instance of InicioComponent.
   * @param {AppComponent} appComponent
   * @param {ActivatedRoute} activatedRoute
   * @param {Router} router
   * @param {SeguridadService} seguridadService
   * @memberof InicioComponent
   */
  constructor(
    public appComponent: AppComponent,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private seguridadService: SeguridadService) {
    this.seguridadService.reiniciarDatos();
  }

  /**
   *
   *
   * @memberof InicioComponent
   */
  ngOnInit() {
    window.scroll(0, 0);
    this.activatedRoute.data.subscribe((data: { listaFlujos: Flujo[] }) => {
      if (isNullOrUndefined(data.listaFlujos) || data.listaFlujos.length <= 0) {
        this.router.navigate([CONSTANTES_CORE.URL_HTML.ERROR_500.URL]);
      }
      this.flujos = data.listaFlujos;
    });
  }

  /**
   * GET Y SET
   */
  get flujos(): Flujo[] {
    return this._flujos;
  }

  set flujos(value: Flujo[]) {
    this._flujos = value;
  }

  /**
   * FUNCIONES
   */

  /**
   *
   *
   * @param {number} codigoFlujo
   * @memberof InicioComponent
   */
  redireccionarLogin(codigoFlujo: number): void {
    switch (codigoFlujo) {
      case CONSTANTES_CORE.CODIGO_FLUJO.VINCULACION: {
        this.router.navigate([URL_FLUJO_CUENTA.LOGIN.URL]);
        break;
      }
      case CONSTANTES_CORE.CODIGO_FLUJO.TARJETA_CP: {
        this.router.navigate([URL_FLUJO_TDCP.LOGIN.URL]);
        break;
      }
      case CONSTANTES_CORE.CODIGO_FLUJO.CREDITO: {
        this.router.navigate([CONSTANTES_PRECISO.URL_HTML.LOGIN.URL]);
        break;
      }
    }
  }
}
