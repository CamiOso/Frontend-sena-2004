import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearResultadoComponent } from './crear-resultado/crear-resultado.component';
import { EditarResultadoComponent } from './editar-resultado/editar-resultado.component';
import { EliminarResultadoComponent } from './eliminar-resultado/eliminar-resultado.component';
import { ListarResultadoComponent } from './listar-resultado/listar-resultado.component';

const routes: Routes = [
  {
    path:"resultado-agregar",
    component: CrearResultadoComponent
  },{
    path:"editar-resultado/:id",
    component:EditarResultadoComponent
  },
  {
    path:"eliminar-resultado/:id",
    component:EliminarResultadoComponent
  },
  {
    path:"resultado-listar",
    component: ListarResultadoComponent }








];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadosRoutingModule { }
