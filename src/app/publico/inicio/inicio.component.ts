import { Component } from '@angular/core';

import { PozoModel } from 'src/app/modelos/pozo.model';
import { ParametrosService } from 'src/app/servicios/parametros.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {


  listaRegistros:PozoModel[]=[];

  constructor(
    private servicioParametrizacion:ParametrosService

  ) { }


  ngOnInit(){
    this.servicioParametrizacion.listarRegistros().subscribe({
      next:(datos:PozoModel[])=>{
        this.listaRegistros=datos;
      },
      error:(err)=>{

      }
    });
  }



}
