import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TareasComponent } from './tareas/tareas.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AnadirTrabajadorComponent } from './anadir-trabajador/anadir-trabajador.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { TareasTrabajadorComponent } from './tareas-trabajador/tareas-trabajador.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    TareasComponent,
    NuevaTareaComponent,
    AnadirTrabajadorComponent,
    ModificarUsuarioComponent,
    CalendarioComponent,
    TareasTrabajadorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatOptionModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
