import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAnalisisComponent } from './crear-analisis/crear-analisis.component';
import { EditarAnalisisComponent } from './editar-analisis/editar-analisis.component';
import { EliminarDisenoComponent } from '../diseno/eliminar-diseno/eliminar-diseno.component';
import { ListarAnalisisComponent } from './listar-analisis/listar-analisis.component';

const routes: Routes = [

  {
    path:"analisis-agregar",
    component: CrearAnalisisComponent
  },{
    path:"editar-analisis/:id",
    component:EditarAnalisisComponent
  },
  {
    path:"eliminar-analisis/:id",
    component:EliminarDisenoComponent
  },
  {
    path:"analisis-listar",
    component: ListarAnalisisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalisisRoutingModule { }
