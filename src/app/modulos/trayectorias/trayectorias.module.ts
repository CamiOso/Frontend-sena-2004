import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrayectoriasRoutingModule } from './trayectorias-routing.module';
import { CrearTrayectoriaComponent } from './crear-trayectoria/crear-trayectoria.component';
import { EditarTrayectoriaComponent } from './editar-trayectoria/editar-trayectoria.component';
import { EliminarTrayectoriaComponent } from './eliminar-trayectoria/eliminar-trayectoria.component';
import { ListarTrayectoriaComponent } from './listar-trayectoria/listar-trayectoria.component';


@NgModule({
  declarations: [
    CrearTrayectoriaComponent,
    EditarTrayectoriaComponent,
    EliminarTrayectoriaComponent,
    ListarTrayectoriaComponent
  ],
  imports: [
    CommonModule,
    TrayectoriasRoutingModule
  ]
})
export class TrayectoriasModule { }
