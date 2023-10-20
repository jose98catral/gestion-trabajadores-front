import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TareasComponent } from './tareas/tareas.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { AnadirTrabajadorComponent } from './anadir-trabajador/anadir-trabajador.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { TareasTrabajadorComponent } from './tareas-trabajador/tareas-trabajador.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'crearTarea', component: NuevaTareaComponent },
  { path: 'editarTarea', component: NuevaTareaComponent },
  { path: 'añadirTrabajador', component: AnadirTrabajadorComponent },
  { path: 'modificarUsuario', component: ModificarUsuarioComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'tareasTrabajador', component: TareasTrabajadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
