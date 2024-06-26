import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioModel } from '../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { UsuarioValidadoModel } from '../modelos/usuario.validado.model';
import { ValidarHashUsuarioPublicoComponent } from '../modulos/seguridad/validar-hash-usuario-publico/validar-hash-usuario-publico.component';
import { PermisoModel } from '../modelos/permiso.model';
import { ItemMenuModel } from '../modelos/item.menu.model';
import { ConfiguracionMenuLateral } from '../config/configuracion.menu.lateral';

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
localStorage.removeItem("menu-lateral");
 this.ActualizarComportamientoUsuario(new UsuarioValidadoModel());

}


RegistrarUsuarioPublico(datos:any):Observable<UsuarioModel>{

  return this.http.post<UsuarioModel>(`${this.urlBase}usuario-publico`,datos);

}


ValidarHashUsuarioPublico(hash:string):Observable<boolean>{

  return this.http.post<boolean>(`${this.urlBase}validar-hash-usuario`,{
    codigoHash: hash
  });

}


ConstruirMenuLateral(permisos: PermisoModel[]) {
  let menu: ItemMenuModel[] = [];

  permisos.forEach((permiso) => {
    let datosRuta = ConfiguracionMenuLateral.listaMenus.filter(x => x.id == permiso.menuId);
    if (datosRuta.length > 0) {
      let item = new ItemMenuModel();
      item.idMenu = permiso.menuId;
      item.ruta = datosRuta[0].ruta;
      item.icono = datosRuta[0].icono;
      item.texto = datosRuta[0].texto;
      menu.push(item);
    }
  });
  this.AlmacenarItemsMenuLateral(menu);
}


/**
 *
 * @param itemsMenu items del menu a guardar en ls
 */

AlmacenarItemsMenuLateral(itemsMenu: ItemMenuModel[]) {
  let menuStr=JSON.stringify(itemsMenu);
  localStorage.setItem("menu-lateral",menuStr);
}

/**
 *
 *  @returns items del menu
 */



obtenerItemsMenuLateral():ItemMenuModel[] {
  let menu:ItemMenuModel[]=[];
  let menuStr=localStorage.getItem("menu-lateral");
  if(menuStr){
   menu=JSON.parse(menuStr);
  }
  return menu;
}


}
