import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { FileComponent } from './file/file.component';

export const routes: Routes = [
    {path:'',component:EmployeesComponent},
    {path:'file/:id/:id2',component:FileComponent}
];
