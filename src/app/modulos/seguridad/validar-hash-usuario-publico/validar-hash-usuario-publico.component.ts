import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-validar-hash-usuario-publico',
  templateUrl: './validar-hash-usuario-publico.component.html',
  styleUrls: ['./validar-hash-usuario-publico.component.css']
})
export class ValidarHashUsuarioPublicoComponent  implements OnInit{

  validado=false;
  hash:string="";
  constructor(
    private servicioSeguridad:SeguridadService,
    private route:ActivatedRoute
  ) { }
  ngOnInit(){

    this.hash=this.route.snapshot.params["hash"];
    this.ValidarHash();

  }

  ValidarHash(){
    this.servicioSeguridad.ValidarHashUsuarioPublico(this.hash).subscribe({
      next: (respuesta:boolean) => {
        this.validado = respuesta;
      },
      error: (err) => {

      }
    });
  }



  }


