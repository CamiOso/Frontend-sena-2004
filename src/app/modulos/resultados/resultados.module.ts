import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { CrearResultadoComponent } from './crear-resultado/crear-resultado.component';
import { EditarResultadoComponent } from './editar-resultado/editar-resultado.component';
import { EliminarResultadoComponent } from './eliminar-resultado/eliminar-resultado.component';
import { ListarResultadoComponent } from './listar-resultado/listar-resultado.component';


@NgModule({
  declarations: [
    CrearResultadoComponent,
    EditarResultadoComponent,
    EliminarResultadoComponent,
    ListarResultadoComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule
  ]
})
export class ResultadosModule { }
