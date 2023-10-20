import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarea } from './claseApoyoTarea';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent {
  tareaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.tareaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      empresa: [''],
      fechaInicio: [new Date(), Validators.required],
      fechaFin: [new Date(), Validators.required],
      trabajadores: [[]],
      descripcion:[""],
    });
  }

  onSubmit() {
    if (this.tareaForm.valid) {
      // Procesa los datos del formulario aquí
      const tareaData = this.tareaForm.value as Tarea;
      console.log(tareaData);
    } else {
      // Maneja errores de validación
    }
  }
}
