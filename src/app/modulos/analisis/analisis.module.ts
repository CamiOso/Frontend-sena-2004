import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalisisRoutingModule } from './analisis-routing.module';
import { CrearAnalisisComponent } from './crear-analisis/crear-analisis.component';
import { EditarAnalisisComponent } from './editar-analisis/editar-analisis.component';
import { EliminarAnalisisComponent } from './eliminar-analisis/eliminar-analisis.component';
import { ListarAnalisisComponent } from './listar-analisis/listar-analisis.component';


@NgModule({
  declarations: [
    CrearAnalisisComponent,
    EditarAnalisisComponent,
    EliminarAnalisisComponent,
    ListarAnalisisComponent
  ],
  imports: [
    CommonModule,
    AnalisisRoutingModule
  ]
})
export class AnalisisModule { }
