import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PozoRoutingModule } from './pozo-routing.module';
import { CrearPozoComponent } from './crear-pozo/crear-pozo.component';
import { EditarPozoComponent } from './editar-pozo/editar-pozo.component';
import { EliminarPozoComponent } from './eliminar-pozo/eliminar-pozo.component';
import { ListarPozoComponent } from './listar-pozo/listar-pozo.component';


@NgModule({
  declarations: [
    CrearPozoComponent,
    EditarPozoComponent,
    EliminarPozoComponent,
    ListarPozoComponent
  ],
  imports: [
    CommonModule,
    PozoRoutingModule
  ]
})
export class PozoModule { }
