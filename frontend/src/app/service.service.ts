import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getAllEmployees(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/api/employees")
  }
   savefile(file:any){
    return this.http.post("http://localhost:3000/api/files/",file)
    }
    getEmployee(id:number):Observable<any>{
      return this.http.get<any>("http://localhost:3000/api/employee/"+id);
      
    }
    getPoST(id:number):Observable<any>{
      return this.http.get<any>("http://localhost:3000/api/post/"+id);
      
    }
}
