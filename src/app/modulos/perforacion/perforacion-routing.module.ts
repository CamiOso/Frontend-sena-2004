import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPerforacionComponent } from './crear-perforacion/crear-perforacion.component';
import { EditarPerforacionComponent } from './editar-perforacion/editar-perforacion.component';
import { EliminarPerforacionComponent } from './eliminar-perforacion/eliminar-perforacion.component';
import { ListarPerforacionComponent } from './listar-perforacion/listar-perforacion.component';

const routes: Routes = [

  {
    path:"perforacion-agregar",
    component: CrearPerforacionComponent
  },{
    path:"editar-perforacion/:id",
    component:EditarPerforacionComponent
  },
  {
    path:"eliminar-perforacion/:id",
    component:EliminarPerforacionComponent
  },
  {
    path:"perforacion-listar",
    component: ListarPerforacionComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerforacionRoutingModule { }
