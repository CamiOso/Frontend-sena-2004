import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPozoComponent } from './crear-pozo/crear-pozo.component';
import { EditarPozoComponent } from './editar-pozo/editar-pozo.component';
import { EliminarPozoComponent } from './eliminar-pozo/eliminar-pozo.component';
import { ListarPozoComponent } from './listar-pozo/listar-pozo.component';

const routes: Routes = [

  {
    path:"pozo-agregar",
    component: CrearPozoComponent
  },{
    path:"editar-pozo/:id",
    component:EditarPozoComponent
  },
  {
    path:"eliminar-pozo/:id",
    component:EliminarPozoComponent
  },
  {
    path:"pozo-listar",
    component: ListarPozoComponent }





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PozoRoutingModule { }
