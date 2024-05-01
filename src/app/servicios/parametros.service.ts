import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { PozoModel } from '../modelos/pozo.model';
import { ConfiguracionPaginacion } from '../config/configuracion.paginacion';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  urlBase:string=ConfiguracionRutasBackend.urlNegocio;

  constructor(private http:HttpClient) {}

    listarRegistros():Observable<PozoModel[ ]>{
     return  this.http.get<PozoModel[ ]>(`${this.urlBase}pozo?${ConfiguracionPaginacion.registrosPorPagina}`);

    }


}
