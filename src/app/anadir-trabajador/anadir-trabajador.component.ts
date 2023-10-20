import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anadir-trabajador',
  templateUrl: './anadir-trabajador.component.html',
  styleUrls: ['./anadir-trabajador.component.css']
})
export class AnadirTrabajadorComponent {
  usuarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.usuarioForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      rol: ['trabajador', Validators.required]  // Valor por defecto: trabajador
    });
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      // Procesa los datos del formulario aquí
      const usuarioData = this.usuarioForm.value;
      console.log(usuarioData);
    } else {
      // Maneja errores de validación
    }
  }
}
