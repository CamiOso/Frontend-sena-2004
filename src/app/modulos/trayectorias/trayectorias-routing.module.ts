import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTrayectoriaComponent } from './crear-trayectoria/crear-trayectoria.component';
import { EditarTrayectoriaComponent } from './editar-trayectoria/editar-trayectoria.component';
import { EliminarTrayectoriaComponent } from './eliminar-trayectoria/eliminar-trayectoria.component';
import { ListarTrayectoriaComponent } from './listar-trayectoria/listar-trayectoria.component';

const routes: Routes = [

  {
    path:"trayectoria-agregar",
    component: CrearTrayectoriaComponent
  },{
    path:"editar-trayectoria/:id",
    component:EditarTrayectoriaComponent
  },
  {
    path:"eliminar-trayectoria/:id",
    component:EliminarTrayectoriaComponent
  },
  {
    path:"trayectoria-listar",
    component: ListarTrayectoriaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrayectoriasRoutingModule { }
