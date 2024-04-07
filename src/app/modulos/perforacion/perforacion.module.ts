import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerforacionRoutingModule } from './perforacion-routing.module';
import { CrearPerforacionComponent } from './crear-perforacion/crear-perforacion.component';

import { EditarPerforacionComponent } from './editar-perforacion/editar-perforacion.component';
import { EliminarPerforacionComponent } from './eliminar-perforacion/eliminar-perforacion.component';
import { ListarPerforacionComponent } from './listar-perforacion/listar-perforacion.component';


@NgModule({
  declarations: [
    CrearPerforacionComponent,
   
    EditarPerforacionComponent,
    EliminarPerforacionComponent,
    ListarPerforacionComponent
  ],
  imports: [
    CommonModule,
    PerforacionRoutingModule
  ]
})
export class PerforacionModule { }
