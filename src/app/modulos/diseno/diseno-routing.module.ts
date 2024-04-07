import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDisenoComponent } from './crear-diseno/crear-diseno.component';
import { EditarDisenoComponent } from './editar-diseno/editar-diseno.component';
import { EliminarDisenoComponent } from './eliminar-diseno/eliminar-diseno.component';
import { ListarDisenoComponent } from './listar-diseno/listar-diseno.component';

const routes: Routes = [

  {
    path:"diseno-agregar",
    component: CrearDisenoComponent
  },{
    path:"editar-diseno/:id",
    component:EditarDisenoComponent
  },
  {
    path:"eliminar-diseno/:id",
    component:EliminarDisenoComponent
  },
  {
    path:"diseno-listar",
    component: ListarDisenoComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisenoRoutingModule { }
