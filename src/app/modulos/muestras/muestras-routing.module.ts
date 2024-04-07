import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMuestraComponent } from './crear-muestra/crear-muestra.component';
import { EditarMuestraComponent } from './editar-muestra/editar-muestra.component';
import { EliminarMuestraComponent } from './eliminar-muestra/eliminar-muestra.component';
import { ListarMuestraComponent } from './listar-muestra/listar-muestra.component';

const routes: Routes = [


  {
    path:"muestra-agregar",
    component: CrearMuestraComponent
  },{
    path:"editar-muestra/:id",
    component:EditarMuestraComponent
  },
  {
    path:"eliminar-muestra/:id",
    component:EliminarMuestraComponent
  },
  {
    path:"muestra-listar",
    component: ListarMuestraComponent }









];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuestrasRoutingModule { }
