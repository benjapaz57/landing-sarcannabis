import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from './models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'landing';

  private subscripcion =new Subscription();

  contact: Contact;
  formulario: FormGroup;


  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.formulario=this.formBuilder.group({
      nombre: [ , Validators.required],
      apellido: [, Validators.required],
      email: [, Validators.required ],
      telefono: [, Validators.required],
      asunto: [, Validators.required ],
      mensaje: [, Validators.required]
    }
    )
  }

  enviar(){
    this.contact=this.formulario.value
    
    if(!this.formulario.invalid){
      
      Swal.fire({
        title: 'Mensaje enviado correctamente',
        icon: 'success',
        confirmButtonText: "Ok",
      });
      console.log(this.contact)
      this.limpiar()
    }
    
 
  }

  limpiar(){
    this.formulario.controls['mensaje'].setValue("");
    this.formulario.controls['asunto'].setValue("");
    this.formulario.controls['email'].setValue("");
    this.formulario.controls['telefono'].setValue("");
    this.formulario.controls['nombre'].setValue("");
    this.formulario.controls['apellido'].setValue("");
  }
}
