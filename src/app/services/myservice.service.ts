import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { EmployeeForm } from '../model/employeeForm';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  companyOptions: string[] = [];

 
  constructor(public http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  url:string="http://localhost:3000";

 

  save(emp:EmployeeForm)

  {
console.log("from service");
const headers = { 'content-type': 'application/json'}  
    return this.http.post<EmployeeForm>(this.url+"/getAllData",emp,{'headers':headers});

  }
  fetchOptionsFromService() {
    return this.http.get<any>(this.url+"/companies");
  }

  getData()

  {

    return this.http.get<EmployeeForm[]>(this.url+"/getAllData");

  }
}
