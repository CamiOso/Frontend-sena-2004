import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearLitologiaComponent } from './crear-litologia/crear-litologia.component';
import { EditarLitologiaComponent } from './editar-litologia/editar-litologia.component';
import { EliminarLitologiaComponent } from './eliminar-litologia/eliminar-litologia.component';
import { ListarLitologiaComponent } from './listar-litologia/listar-litologia.component';

const routes: Routes = [


  {
    path:"litologia-agregar",
    component: CrearLitologiaComponent
  },{
    path:"editar-litologia/:id",
    component:EditarLitologiaComponent
  },
  {
    path:"eliminar-litologia/:id",
    component:EliminarLitologiaComponent
  },
  {
    path:"litologia-listar",
    component: ListarLitologiaComponent }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LitologiaRoutingModule { }
