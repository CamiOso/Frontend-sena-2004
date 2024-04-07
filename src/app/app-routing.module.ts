import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './publico/inicio/inicio.component';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';



const routes: Routes = [{
path:"inicio",
component:InicioComponent

},
{
  path:"",
  pathMatch:"full",
  redirectTo:"/inicio"
},

{ path:"seguridad",
  loadChildren:()=>import("./modulos/seguridad/seguridad.module").then(m=>m.SeguridadModule)

},
{
  path:"resultado",
  loadChildren:()=>import("./modulos/resultados/resultados.module").then(m=>m.ResultadosModule)

},


{
  path:"pozo",
  loadChildren:()=>import("./modulos/pozo/pozo.module").then(m=>m.PozoModule)


}
,

{
  path: 'parametros',
  loadChildren: () => import('./modulos/parametros/parametros.module').then(m => m.ParametrosModule),

},


{ path:"litologia",
loadChildren:()=>import("./modulos/litologia/litologia.module").then(m=>m.LitologiaModule)


},
{

  path:"trayectoria",
  loadChildren:()=>import("./modulos/trayectorias/trayectorias.module").then(m=>m.TrayectoriasModule)

}

,

{
  path:"perforacion",
  loadChildren:()=>import("./modulos/perforacion/perforacion.module").then(m=>m.PerforacionModule)


},

{
  path:"muestra",
  loadChildren:()=>import("./modulos/muestras/muestras.module").then(m=>m.MuestrasModule)
},

{

  path:"mina",
  loadChildren:()=>import("./modulos/minas/minas.module").then(m=>m.MinasModule)
},


{
  path:"diseno",
  loadChildren:()=>import("./modulos/diseno/diseno.module").then(m=>m.DisenoModule)
},
{
  path:"analisis",
  loadChildren:()=>import("./modulos/analisis/analisis.module").then(m=>m.AnalisisModule)

},

{
  path:"**",
  component:RutaNoEncontradaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
