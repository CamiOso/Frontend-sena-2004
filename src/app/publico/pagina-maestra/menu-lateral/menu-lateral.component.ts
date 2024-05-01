import { Component } from '@angular/core';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

import { ItemMenuModel } from 'src/app/modelos/item.menu.model';

declare const iniciarMenuLateral:any;

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {

  listaMenus:ItemMenuModel[]=[];

  constructor(
    private servicioSeguridad:SeguridadService
  ) { }


  ngOnInit(){
    this.listaMenus=this.servicioSeguridad.obtenerItemsMenuLateral();
    iniciarMenuLateral();

  }



}
