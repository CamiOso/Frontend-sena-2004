import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioModel } from '../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { UsuarioValidadoModel } from '../modelos/usuario.validado.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  urlBase:string=ConfiguracionRutasBackend.urlSeguridad;

  constructor(
    private http:HttpClient

  ) {
    this.validacionDeSesion();
   }


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
    localStorage.setItem("datos-usuario",cadena);
    return true;
  }
  }


  /**
   * Busca los datos de un usuario en local Storage
   * @returns
   */

  ObtenerDatosUsuarioLs():UsuarioModel |null{

    let datosLs=localStorage.getItem("datos-usuario");
    if(datosLs){
     let datos=JSON.parse(datosLs);
     return datos;
    }else{
      return null;
    }

  }




  ValidarCodigo2FA(idUsuario: string, codigo: string): Observable<UsuarioValidadoModel> {
    return this.http.post<UsuarioValidadoModel>(`${this.urlBase}verificar-2fa`, {
      usuarioId: idUsuario,
      codigo2fa: codigo
    });
  }


  RecuperarClavePorUsuario(usuario: string): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${this.urlBase}recuperar-clave`, {
      correo: usuario,
    });
  }


  /**
   *Guarda en local storage la informacion del usuario validado
   * @param datos datos del usuario validado
   * @returns respuesta
   */
  AlmacenarDatosUsuarioValidado(datos:UsuarioValidadoModel):boolean{
    let datosLs=localStorage.getItem("datos-sesion");
    if(datosLs!=null){
      return false;

    }else{
     let  datosString=JSON.stringify(datos);
     localStorage.setItem("datos-sesion",datosString);
     this.ActualizarComportamientoUsuario(datos);
     return true;
    }


  }



 /**Administracion de la sesion de usuario */

 datosUsuarioValidado = new BehaviorSubject<UsuarioValidadoModel>(new UsuarioValidadoModel());
 ObtenerDatosSesion():Observable<UsuarioValidadoModel>{
  return this.datosUsuarioValidado.asObservable();
 }


 validacionDeSesion(): UsuarioValidadoModel | null {
  let ls = localStorage.getItem("datos-sesion");
  if (ls) {
    let objUsuario = JSON.parse(ls);
    this.ActualizarComportamientoUsuario(objUsuario);
    return objUsuario;
  }
  return null;
}


ActualizarComportamientoUsuario(datos: UsuarioValidadoModel) {
  return this.datosUsuarioValidado.next(datos);
}


/**
 * Cerrando Sesion
 *
 *
 */
RemoverDatosUsuarioValidado(){
  let datosUsuario=localStorage.getItem("datos-usuario");
  let datosSesion=localStorage.getItem("datos-sesion");
 if(datosUsuario){
    localStorage.removeItem("datos-usuario");

 }
 if(datosSesion){
    localStorage.removeItem("datos-sesion");

 }

 this.ActualizarComportamientoUsuario(new UsuarioValidadoModel());

}


RegistrarUsuarioPublico(datos:any):Observable<UsuarioModel>{

  return this.http.post<UsuarioModel>(`${this.urlBase}usuario-publico`,datos);

}


}
