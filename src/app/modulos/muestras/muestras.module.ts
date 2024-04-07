import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuestrasRoutingModule } from './muestras-routing.module';
import { CrearMuestraComponent } from './crear-muestra/crear-muestra.component';

import { EditarMuestraComponent } from './editar-muestra/editar-muestra.component';
import { EliminarMuestraComponent } from './eliminar-muestra/eliminar-muestra.component';
import { ListarMuestraComponent } from './listar-muestra/listar-muestra.component';


@NgModule({
  declarations: [
    CrearMuestraComponent,

    EditarMuestraComponent,
    EliminarMuestraComponent,
    ListarMuestraComponent
  ],
  imports: [
    CommonModule,
    MuestrasRoutingModule
  ]
})
export class MuestrasModule { }
