import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import {MD5} from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion-usuario',
  templateUrl: './identificacion-usuario.component.html',
  styleUrls: ['./identificacion-usuario.component.css']
})
export class IdentificacionUsuarioComponent {

  fGroup: FormGroup= new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private servicioSeguridad:SeguridadService,
    private router:Router
  ){


  }

  ngOnInit(){
    this.ConstruirFormulario();

  }

ConstruirFormulario(){
 this.fGroup=this.fb.group({
  usuario:['',[ Validators.required,Validators.email] ],
  clave:['',[ Validators.required] ]

 });
}


/**
 *
 * @param usuario
 * @param clave
 * @returns datos del usuario validado
 */


IdentificarUsuario() {

  console.log("Iniciando IdentificarUsuario()");
  if (this.fGroup.invalid) {
    console.log("Formulario inválido");
    alert("Datos incompletos");
  } else {
    let usuario = this.obtenerFormGroup['usuario'].value;
    let clave = this.obtenerFormGroup['clave'].value;
    let claveCifrada = MD5(clave).toString();
    this.servicioSeguridad.IdentificarUsuario(usuario, claveCifrada).subscribe({
      next: (datos: UsuarioModel) => {

        if(datos._id==undefined || datos._id==null){

          alert("Credenciales incorrectas o Falta la validación del correo electrónico.");
          return;

        }
    else {

          if (this.servicioSeguridad.AlmacenarDatosUsuarioIdentificado(datos)) {
            console.log("Datos del usuario almacenados correctamente, navegando a /seguridad/2fa");
            this.router.navigate(["/seguridad/2fa"]);

          }}



      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}


get obtenerFormGroup(){
  return this.fGroup.controls;
}


}
