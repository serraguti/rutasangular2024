import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  templateUrl: './numero-doble.component.html',
  styleUrl: './numero-doble.component.css'
})
export class NumeroDobleComponent implements OnInit {
  //ESTA VARIABLE NADA QUE VER CON EL PARAM
  public numero !: number;
  public doble !: number;
  constructor(private _activeRoute: ActivatedRoute
    , private _router: Router
  ) {}

  goToHome(): void  {
    this._router.navigate(["/"]);
  }

  redirect(num: number): void {
    //NOS VAMOS A LLAMAR A NOSOTROS MISMOS ENVIANDO EN LA RUTA EL 
    //PARAMETRO DEL NUMERO RECIBIDO
    this._router.navigate(["/numerodoble", num]);
  }

  ngOnInit(): void {
    //AQUI DEBEMOS SUBSCRIBIRNOS A LOS PARAMETROS QUE PUEDAN 
    //VENIR EN UNA RUTA
    this._activeRoute.params.subscribe((parametros: Params) => {
      //DENTRO DE Params SE RECUPERAN LOS PARAMETROS POR SU NOMBRE
      //CON LA SIGUIENTE SINTAXIS:  params['PARAMETER NAME']
      //EN ESTE EJEMPLO, EL PARAMETRO SERA OPCIONAL, POR LO 
      //QUE VAMOS A PREGUNTAR ANTES DE ASIGNAR
      if (parametros['numero'] != null){
        //LOS PARAMETROS SON STRING
        this.numero = parseInt(parametros["numero"]);
        this.doble = this.numero * 2;
      }
    })
  }
}
