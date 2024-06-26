import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { RegistroPublicoUsuariosComponent } from './registro-publico-usuarios/registro-publico-usuarios.component';
import { IdentificacionTwofaComponent } from './identificacion-twofa/identificacion-twofa.component';
import { ValidarHashUsuarioPublicoComponent } from './validar-hash-usuario-publico/validar-hash-usuario-publico.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { ValidarSesionActivaGuard } from 'src/app/guardianes/validar-sesion-activa.guard';
import { ValidarSesionInactivaGuard } from 'src/app/guardianes/validar-sesion-inactiva.guard';

const routes: Routes= [{
  path:"identificar-usuario",
  component: IdentificacionUsuarioComponent,
  canActivate:[ValidarSesionInactivaGuard]
},{
  path:"cambiar-clave",
  component:CambioClaveComponent,
  canActivate:[ValidarSesionInactivaGuard]
},
{
  path:"recuperar-clave",
  component:RecuperarClaveComponent,
  canActivate:[ValidarSesionInactivaGuard]
},
{
  path:"cerrar-sesion",
  component: CerrarSesionComponent,
  canActivate:[ValidarSesionActivaGuard]
},{
path:"registro-publico",
component:RegistroPublicoUsuariosComponent,
canActivate:[ValidarSesionInactivaGuard]

}
,{
  path:"2fa",
  component:IdentificacionTwofaComponent,
  canActivate:[ValidarSesionInactivaGuard]

  },{
    path:"validar-hash-usuario-publico/:hash",
    component:ValidarHashUsuarioPublicoComponent,
    canActivate:[ValidarSesionInactivaGuard]

  },
  {
    path:"usuario-crear",
    component: CrearUsuarioComponent,
    canActivate:[ValidarSesionActivaGuard]
  },
  {
    path:"usuario-editar/:id",
    component: EditarUsuarioComponent,
    canActivate:[ValidarSesionActivaGuard]
  },
  {
    path:"eliminar-usuario/:id",
    component: EliminarUsuarioComponent,
    canActivate:[ValidarSesionActivaGuard]
  },
  {
    path:"listar-usuario",
    component: ListarUsuarioComponent,
    canActivate:[ValidarSesionActivaGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
