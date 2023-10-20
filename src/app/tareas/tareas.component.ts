import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  
  columnas: string[] = ['estado', 'nombre', 'cliente', 'fechaInicio', 'fechaFin', 'trabajadores', 'editar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
 
  pageSizeOptions = [5, 10, 25];
  pageSize = 5;
  tareas = [
    {
      estado: 'En progreso',
      nombre: 'Tarea 1',
      cliente: 'Cliente A',
      fechaInicio: '2023-10-01',
      fechaFin: '2023-10-15',
      trabajadores: ['Trabajador 1', 'Trabajador 2'],
    },
    {
      estado: 'Completada',
      nombre: 'Tarea 2',
      cliente: 'Cliente B',
      fechaInicio: '2023-10-05',
      fechaFin: '2023-10-20',
      trabajadores: ['Trabajador 2', 'Trabajador 3'],
    },
    {
      estado: 'Pendiente',
      nombre: 'Tarea 3',
      cliente: 'Cliente A',
      fechaInicio: '2023-10-10',
      fechaFin: '2023-10-25',
      trabajadores: ['Trabajador 1', 'Trabajador 4'],
    },
    {
      estado: 'En progreso',
      nombre: 'Tarea 4',
      cliente: 'Cliente C',
      fechaInicio: '2023-10-15',
      fechaFin: '2023-10-30',
      trabajadores: ['Trabajador 3', 'Trabajador 5'],
    },
    {
      estado: 'Completada',
      nombre: 'Tarea 5',
      cliente: 'Cliente B',
      fechaInicio: '2023-10-20',
      fechaFin: '2023-11-05',
      trabajadores: ['Trabajador 2', 'Trabajador 4'],
    },
    {
      estado: 'Pendiente',
      nombre: 'Tarea 6',
      cliente: 'Cliente A',
      fechaInicio: '2023-10-25',
      fechaFin: '2023-11-10',
      trabajadores: ['Trabajador 1', 'Trabajador 5'],
    },
    {
      estado: 'En progreso',
      nombre: 'Tarea 7',
      cliente: 'Cliente C',
      fechaInicio: '2023-10-30',
      fechaFin: '2023-11-15',
      trabajadores: ['Trabajador 3', 'Trabajador 4'],
    },
    {
      estado: 'Completada',
      nombre: 'Tarea 8',
      cliente: 'Cliente B',
      fechaInicio: '2023-11-05',
      fechaFin: '2023-11-20',
      trabajadores: ['Trabajador 1', 'Trabajador 2'],
    },
    {
      estado: 'Pendiente',
      nombre: 'Tarea 9',
      cliente: 'Cliente A',
      fechaInicio: '2023-11-10',
      fechaFin: '2023-11-25',
      trabajadores: ['Trabajador 4', 'Trabajador 5'],
    },
    {
      estado: 'En progreso',
      nombre: 'Tarea 10',
      cliente: 'Cliente C',
      fechaInicio: '2023-11-15',
      fechaFin: '2023-11-30',
      trabajadores: ['Trabajador 2', 'Trabajador 3'],
    },
  ];
  dataSource = new MatTableDataSource<any>(this.tareas);
  ngAfterViewInit() {
    console.log(this.paginator);
    this.dataSource.paginator = this.paginator; // Conectar el paginador a la fuente de datos
  }
  agregarTarea(){

  }
  editarTarea(tarea : any ){

  }

  eliminarTarea(tarea : any ){

  }
}
