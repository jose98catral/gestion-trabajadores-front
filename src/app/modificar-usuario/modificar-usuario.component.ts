import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent {
  perfilForm: FormGroup;
  avatarUrl!: string;

  constructor(private formBuilder: FormBuilder) {
    this.perfilForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      contrasena: ['', Validators.required],
      nuevaContrasena: [''],
      imagenPerfil: ['']
    });
  }

  onSubmit() {
    if (this.perfilForm.valid) {
      // Procesa los datos del formulario aquí
      const perfilData = this.perfilForm.value;
      console.log(perfilData);
    } else {
      // Maneja errores de validación
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatarUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}

