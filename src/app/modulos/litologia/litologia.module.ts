import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LitologiaRoutingModule } from './litologia-routing.module';
import { CrearLitologiaComponent } from './crear-litologia/crear-litologia.component';
import { EditarLitologiaComponent } from './editar-litologia/editar-litologia.component';
import { EliminarLitologiaComponent } from './eliminar-litologia/eliminar-litologia.component';
import { ListarLitologiaComponent } from './listar-litologia/listar-litologia.component';


@NgModule({
  declarations: [
    CrearLitologiaComponent,
    EditarLitologiaComponent,
    EliminarLitologiaComponent,
    ListarLitologiaComponent
  ],
  imports: [
    CommonModule,
    LitologiaRoutingModule
  ]
})
export class LitologiaModule { }
