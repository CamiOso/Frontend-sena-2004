import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { RegistroPublicoUsuariosComponent } from './registro-publico-usuarios/registro-publico-usuarios.component';
import { IdentificacionTwofaComponent } from './identificacion-twofa/identificacion-twofa.component';

const routes: Routes= [{
  path:"identificar-usuario",
  component: IdentificacionUsuarioComponent
},{
  path:"cambiar-clave",
  component:CambioClaveComponent
},
{
  path:"recuperar-clave",
  component:RecuperarClaveComponent
},
{
  path:"cerrar-sesion",
  component: CerrarSesionComponent
},{
path:"registro-publico",
component:RegistroPublicoUsuariosComponent

}
,{
  path:"2fa",
  component:IdentificacionTwofaComponent

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
