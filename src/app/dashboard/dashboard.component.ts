import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dataSource = [
    { position: 1, name: 'John', age: 30 },
    { position: 2, name: 'Alice', age: 25 },
    { position: 3, name: 'Bob', age: 35 },
    { position: 4, name: 'John', age: 30 },
    { position: 5, name: 'Alice', age: 25 },
    { position: 6, name: 'Bob', age: 35 },
  
   
  ];


  displayedColumns = ['position', 'name', 'age'];
}

