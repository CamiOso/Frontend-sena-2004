import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisenoRoutingModule } from './diseno-routing.module';
import { CrearDisenoComponent } from './crear-diseno/crear-diseno.component';
import { EditarDisenoComponent } from './editar-diseno/editar-diseno.component';
import { EliminarDisenoComponent } from './eliminar-diseno/eliminar-diseno.component';
import { ListarDisenoComponent } from './listar-diseno/listar-diseno.component';


@NgModule({
  declarations: [
    CrearDisenoComponent,
    EditarDisenoComponent,
    EliminarDisenoComponent,
    ListarDisenoComponent
  ],
  imports: [
    CommonModule,
    DisenoRoutingModule
  ]
})
export class DisenoModule { }
