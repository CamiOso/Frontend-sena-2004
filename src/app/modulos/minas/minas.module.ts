import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinasRoutingModule } from './minas-routing.module';
import { CrearMinaComponent } from './crear-mina/crear-mina.component';
import { EditarMinaComponent } from './editar-mina/editar-mina.component';
import { EliminarMinaComponent } from './eliminar-mina/eliminar-mina.component';
import { ListarMinaComponent } from './listar-mina/listar-mina.component';


@NgModule({
  declarations: [
    CrearMinaComponent,
    EditarMinaComponent,
    EliminarMinaComponent,
    ListarMinaComponent
  ],
  imports: [
    CommonModule,
    MinasRoutingModule
  ]
})
export class MinasModule { }
