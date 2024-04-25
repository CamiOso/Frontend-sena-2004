import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';

import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { CrearEquipoComponent } from './equipo/crear-equipo/crear-equipo.component';
import { EditarEquipoComponent } from './equipo/editar-equipo/editar-equipo.component';
import { EliminarEquipoComponent } from './equipo/eliminar-equipo/eliminar-equipo.component';
import { ListarEquipoComponent } from './equipo/listar-equipo/listar-equipo.component';
import { CrearPerforistaComponent } from './perforista/crear-perforista/crear-perforista.component';
import { EditarPerforistaComponent } from './perforista/editar-perforista/editar-perforista.component';
import { EliminarPerforistaComponent } from './perforista/eliminar-perforista/eliminar-perforista.component';
import { ListarPerforistaComponent } from './perforista/listar-perforista/listar-perforista.component';
import { CrearEstadoComponent } from './estado/crear-estado/crear-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { EliminarEstadoComponent } from './estado/eliminar-estado/eliminar-estado.component';
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';
import { CrearPlaneadorComponent } from './planeador/crear-planeador/crear-planeador.component';
import { EditarPlaneadorComponent } from './planeador/editar-planeador/editar-planeador.component';
import { EliminarPlaneadorComponent } from './planeador/eliminar-planeador/eliminar-planeador.component';
import { ListarPlaneadorComponent } from './planeador/listar-planeador/listar-planeador.component';
import { CrearMineralComponent } from './mineral/crear-mineral/crear-mineral.component';
import { EditarMineralComponent } from './mineral/editar-mineral/editar-mineral.component';
import { EliminarMineralComponent } from './mineral/eliminar-mineral/eliminar-mineral.component';
import { ListarMineralComponent } from './mineral/listar-mineral/listar-mineral.component';
import { CrearTipoRocaComponent } from './tipoRoca/crear-tipo-roca/crear-tipo-roca.component';
import { EditarTipoRocaComponent } from './tipoRoca/editar-tipo-roca/editar-tipo-roca.component';
import { EliminarTipoRocaComponent } from './tipoRoca/eliminar-tipo-roca/eliminar-tipo-roca.component';
import { ListarTipoRocaComponent } from './tipoRoca/listar-tipo-roca/listar-tipo-roca.component';
import { CrearRocaComponent } from './Roca/crear-roca/crear-roca.component';
import { EditarRocaComponent } from './Roca/editar-roca/editar-roca.component';
import { EliminarRocaComponent } from './Roca/eliminar-roca/eliminar-roca.component';
import { ListarRocaComponent } from './Roca/listar-roca/listar-roca.component';
import { CrearVetaComponent } from './Veta/crear-veta/crear-veta.component';
import { EditarVetaComponent } from './Veta/editar-veta/editar-veta.component';
import { EliminarVetaComponent } from './Veta/eliminar-veta/eliminar-veta.component';
import { ListarVetaComponent } from './Veta/listar-veta/listar-veta.component';
import { CrearTipoAnalisisComponent } from './TipoAnalisis/crear-tipo-analisis/crear-tipo-analisis.component';
import { EditarTipoAnalisisComponent } from './TipoAnalisis/editar-tipo-analisis/editar-tipo-analisis.component';
import { EliminarTipoAnalisisComponent } from './TipoAnalisis/eliminar-tipo-analisis/eliminar-tipo-analisis.component';
import { ListarTipoAnalisisComponent } from './TipoAnalisis/listar-tipo-analisis/listar-tipo-analisis.component';
import { ListarLaboratorioComponent } from './Laboratorio/listar-laboratorio/listar-laboratorio.component';
import { CrearLaboratorioComponent } from './Laboratorio/crear-laboratorio/crear-laboratorio.component';
import { EditarLaboratorioComponent } from './Laboratorio/editar-laboratorio/editar-laboratorio.component';
import { EliminarLaboratorioComponent } from './Laboratorio/eliminar-laboratorio/eliminar-laboratorio.component';


@NgModule({
  declarations: [

    CrearDepartamentoComponent,
    EditarDepartamentoComponent,
    ListarDepartamentoComponent,
    EliminarDepartamentoComponent,
    CrearEquipoComponent,
    EditarEquipoComponent,
    EliminarEquipoComponent,
    ListarEquipoComponent,
    CrearPerforistaComponent,
    EditarPerforistaComponent,
    EliminarPerforistaComponent,
    ListarPerforistaComponent,
    CrearEstadoComponent,
    EditarEstadoComponent,
    EliminarEstadoComponent,
    ListarEstadoComponent,
    CrearPlaneadorComponent,
    EditarPlaneadorComponent,
    EliminarPlaneadorComponent,
    ListarPlaneadorComponent,
    CrearMineralComponent,
    EditarMineralComponent,
    EliminarMineralComponent,
    ListarMineralComponent,
    CrearTipoRocaComponent,
    EditarTipoRocaComponent,
    EliminarTipoRocaComponent,
    ListarTipoRocaComponent,
    CrearRocaComponent,
    EditarRocaComponent,
    EliminarRocaComponent,
    ListarRocaComponent,
    CrearVetaComponent,
    EditarVetaComponent,
    EliminarVetaComponent,
    ListarVetaComponent,
    CrearTipoAnalisisComponent,
    EditarTipoAnalisisComponent,
    EliminarTipoAnalisisComponent,
    ListarTipoAnalisisComponent,
    ListarLaboratorioComponent,
    CrearLaboratorioComponent,
    EditarLaboratorioComponent,
    EliminarLaboratorioComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
