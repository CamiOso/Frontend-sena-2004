import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';
import { CrearEquipoComponent } from './equipo/crear-equipo/crear-equipo.component';
import { EditarEquipoComponent } from './equipo/editar-equipo/editar-equipo.component';
import { EliminarEquipoComponent } from './equipo/eliminar-equipo/eliminar-equipo.component';
import { ListarEquipoComponent } from './equipo/listar-equipo/listar-equipo.component';
import { CrearEstadoComponent } from './estado/crear-estado/crear-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { EliminarEstadoComponent } from './estado/eliminar-estado/eliminar-estado.component';
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';
import { CrearMineralComponent } from './mineral/crear-mineral/crear-mineral.component';
import { EditarMineralComponent } from './mineral/editar-mineral/editar-mineral.component';
import { EliminarMineralComponent } from './mineral/eliminar-mineral/eliminar-mineral.component';
import { ListarMineralComponent } from './mineral/listar-mineral/listar-mineral.component';
import { CrearPerforistaComponent } from './perforista/crear-perforista/crear-perforista.component';
import { EditarPerforistaComponent } from './perforista/editar-perforista/editar-perforista.component';
import { EliminarPerforistaComponent } from './perforista/eliminar-perforista/eliminar-perforista.component';
import { ListarPerforistaComponent } from './perforista/listar-perforista/listar-perforista.component';
import { CrearPlaneadorComponent } from './planeador/crear-planeador/crear-planeador.component';
import { EditarPlaneadorComponent } from './planeador/editar-planeador/editar-planeador.component';
import { EliminarPlaneadorComponent } from './planeador/eliminar-planeador/eliminar-planeador.component';
import { ListarPlaneadorComponent } from './planeador/listar-planeador/listar-planeador.component';
import { CrearRocaComponent } from './Roca/crear-roca/crear-roca.component';
import { EditarRocaComponent } from './Roca/editar-roca/editar-roca.component';
import { EliminarRocaComponent } from './Roca/eliminar-roca/eliminar-roca.component';
import { ListarRocaComponent } from './Roca/listar-roca/listar-roca.component';
import { CrearTipoAnalisisComponent } from './TipoAnalisis/crear-tipo-analisis/crear-tipo-analisis.component';
import { EditarTipoAnalisisComponent } from './TipoAnalisis/editar-tipo-analisis/editar-tipo-analisis.component';
import { EliminarTipoAnalisisComponent } from './TipoAnalisis/eliminar-tipo-analisis/eliminar-tipo-analisis.component';
import { ListarTipoAnalisisComponent } from './TipoAnalisis/listar-tipo-analisis/listar-tipo-analisis.component';
import { CrearTipoRocaComponent } from './tipoRoca/crear-tipo-roca/crear-tipo-roca.component';
import { EditarTipoRocaComponent } from './tipoRoca/editar-tipo-roca/editar-tipo-roca.component';
import { EliminarTipoRocaComponent } from './tipoRoca/eliminar-tipo-roca/eliminar-tipo-roca.component';
import { ListarTipoRocaComponent } from './tipoRoca/listar-tipo-roca/listar-tipo-roca.component';
import { CrearVetaComponent } from './Veta/crear-veta/crear-veta.component';
import { EditarVetaComponent } from './Veta/editar-veta/editar-veta.component';
import { EliminarVetaComponent } from './Veta/eliminar-veta/eliminar-veta.component';
import { ListarVetaComponent } from './Veta/listar-veta/listar-veta.component';
import { CrearLaboratorioComponent } from './Laboratorio/crear-laboratorio/crear-laboratorio.component';
import { EditarLaboratorioComponent } from './Laboratorio/editar-laboratorio/editar-laboratorio.component';
import { EliminarLaboratorioComponent } from './Laboratorio/eliminar-laboratorio/eliminar-laboratorio.component';
import { ListarLaboratorioComponent } from './Laboratorio/listar-laboratorio/listar-laboratorio.component';

const routes: Routes = [

  {
    path:"departamento-agregar",
    component: CrearDepartamentoComponent
  },{
    path:"editar-departamento/:id",
    component:EditarDepartamentoComponent
  },
  {
    path:"eliminar-Departamento/:id",
    component:EliminarDepartamentoComponent
  },
  {
    path:"departamento-listar",
    component: ListarDepartamentoComponent},



    {
      path:"equipo-agregar",
      component: CrearEquipoComponent
    },{
      path:"editar-equipo/:id",
      component:EditarEquipoComponent
    },
    {
      path:"eliminar-equipo/:id",
      component:EliminarEquipoComponent
    },
    {
      path:"equipo-listar",
      component: ListarEquipoComponent},




      {
        path:"estado-agregar",
        component: CrearEstadoComponent
      },{
        path:"editar-estado/:id",
        component:EditarEstadoComponent
      },
      {
        path:"eliminar-estado/:id",
        component:EliminarEstadoComponent
      },
      {
        path:"estado-listar",
        component: ListarEstadoComponent},


        {
          path:"mineral-agregar",
          component: CrearMineralComponent
        },{
          path:"editar-mineral/:id",
          component:EditarMineralComponent
        },
        {
          path:"eliminar-mineral/:id",
          component:EliminarMineralComponent
        },
        {
          path:"mineral-listar",
          component: ListarMineralComponent},




          {
            path:"perforista-agregar",
            component: CrearPerforistaComponent
          },{
            path:"editar-perforista/:id",
            component:EditarPerforistaComponent
          },
          {
            path:"eliminar-perforista/:id",
            component:EliminarPerforistaComponent
          },
          {
            path:"perforista-listar",
            component: ListarPerforistaComponent},




          {
            path:"planeador-agregar",
            component: CrearPlaneadorComponent
          },{
            path:"editar-planeador/:id",
            component:EditarPlaneadorComponent
          },
          {
            path:"eliminar-planeador/:id",
            component:EliminarPlaneadorComponent
          },
          {
            path:"planeador-listar",
            component: ListarPlaneadorComponent},





            {
              path:"roca-agregar",
              component: CrearRocaComponent
            },{
              path:"editar-roca/:id",
              component:EditarRocaComponent
            },
            {
              path:"eliminar-roca/:id",
              component:EliminarRocaComponent
            },
            {
              path:"roca-listar",
              component: ListarRocaComponent},




              {
                path:"tipo-analisis-agregar",
                component: CrearTipoAnalisisComponent
              },{
                path:"editar-tipo-analisis/:id",
                component:EditarTipoAnalisisComponent
              },
              {
                path:"eliminar-tipo-analisis/:id",
                component:EliminarTipoAnalisisComponent
              },
              {
                path:"tipo-analisis-listar",
                component: ListarTipoAnalisisComponent},




              {
                path:"tipo-roca-agregar",
                component: CrearTipoRocaComponent
              },{
                path:"editar-tipo-roca/:id",
                component:EditarTipoRocaComponent
              },
              {
                path:"eliminar-tipo-roca/:id",
                component:EliminarTipoRocaComponent
              },
              {
                path:"tipo-roca-listar",
                component: ListarTipoRocaComponent},



              {
                path:"veta-agregar",
                component: CrearVetaComponent
              },{
                path:"editar-veta/:id",
                component:EditarVetaComponent
              },
              {
                path:"eliminar-veta/:id",
                component:EliminarVetaComponent
              },
              {
                path:"veta-listar",
                component: ListarVetaComponent},



                {
                  path:"laboratorio-agregar",
                  component: CrearLaboratorioComponent
                },{
                  path:"editar-laboratorio/:id",
                  component:EditarLaboratorioComponent
                },
                {
                  path:"eliminar-laboratorio/:id",
                  component:EliminarLaboratorioComponent
                },
                {
                  path:"laboratorio-listar",
                  component: ListarLaboratorioComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
