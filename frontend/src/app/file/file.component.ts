import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';


@Component({
  selector: 'app-file',
  standalone: true,
  imports: [
    MatIcon,
    NgIf,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatButton,
    FormsModule,
    FormsModule
  ],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {
  employee:any={id_employee:"",nom_complet:"",date_embauche:null,id_post:""};
  file:any={mois:"",annee:"",id_employee:"",id_post:""};
  constructor(private http:HttpClient,private service:ServiceService,private route:ActivatedRoute,private router:Router) {
  }
  id_emp:any;
  id_post:any;
  
  ngOnInit() {
    this.id_emp=this.route.snapshot.params['id']; 
    this.id_post=this.route.snapshot.params['id2']; 
    this.employee.id_employee=this.id_emp;
    this.employee.id_post=this.id_post;
}
    submit(){
      this.file.id_employee=this.id_emp;
      this.file.id_post=this.id_post;
        this.service.savefile(this.file).
        subscribe(data=>this.file=data);
        alert('Operation bien faite');
    }
}