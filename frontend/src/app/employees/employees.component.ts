import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {Employee} from '../employee';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    MatIcon,
    MatTableModule,
    MatCardModule,
    MatButton
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  constructor(private service:ServiceService,private router:Router,){}
  contacts: Employee[] = [];
  ngOnInit(){
    this.service.getAllEmployees().subscribe(data=>this.contacts=data);
  }
  displayedColumns: string[] = ['id_employee','nom_complet', 'date_embauche', 'date_naissance', 'adress','compte_bancaire','email','id_post','actions'];
  dataSource = this.contacts;
  add(id:number,id2:number){
    this.router.navigate(["/file",id,id2]);
  }
}
