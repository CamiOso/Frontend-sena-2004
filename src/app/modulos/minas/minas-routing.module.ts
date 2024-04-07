import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMinaComponent } from './crear-mina/crear-mina.component';
import { EditarMinaComponent } from './editar-mina/editar-mina.component';
import { EliminarMinaComponent } from './eliminar-mina/eliminar-mina.component';
import { ListarMinaComponent } from './listar-mina/listar-mina.component';

const routes: Routes = [

  {
    path:"mina-agregar",
    component: CrearMinaComponent
  },{
    path:"editar-mina/:id",
    component:EditarMinaComponent
  },
  {
    path:"eliminar-mina/:id",
    component:EliminarMinaComponent
  },
  {
    path:"mina-listar",
    component: ListarMinaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinasRoutingModule { }
