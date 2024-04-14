import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  urlBase:string=ConfiguracionRutasBackend.urlSeguridad;

  constructor(
    private http:HttpClient

  ) { }


  IdentificarUsuario(usuario:string,clave:string):Observable <UsuarioModel>{

    return this.http.post<UsuarioModel>(`${this.urlBase}identificar-usuario`,{
      correo:usuario,
      clave:clave
    });


  }


  AlmacenarDatosUsuarioIdentificado(datos:UsuarioModel):boolean{
 let cadena=JSON.stringify(datos);
 let datosLS=localStorage.getItem("datos-usuario");
  if(datosLS){
    return false;

  }else{
    localStorage.setItem("datos-usuario,cadena",cadena);
    return true;
  }
  }


  /**
   * Busca los datos de un usuario en local Storage
   * @returns
   */

  ObtenerDatosUsuarioLs():UsuarioModel |null{

    let datosLs=localStorage.getItem("datos-item");
    if(datosLs){
     let datos=JSON.parse(datosLs);
     return datos;
    }else{
      return null;
    }

  }


  RemoverDatosUsuarioValidado() {
    let datosUsuario = localStorage.getItem("datos-usuario");
    let datosSesion = localStorage.getItem("datos-sesion");
    if (datosUsuario) {
      localStorage.removeItem("datos-usuario");
    }
    if (datosSesion) {
      localStorage.removeItem("datos-sesion");
    }
    localStorage.removeItem("menu-lateral");
    //this.ActualizarComportamientoUsuario(new UsuarioValidadoModel());
  }

  ValidarCodigo2FA(idUsuario: string, codigo: string): Observable<object> {
    return this.http.post<object>(`${this.urlBase}verificar-2fa`, {
      usuarioId: idUsuario,
      codigo2fa: codigo
    });
  }


}
