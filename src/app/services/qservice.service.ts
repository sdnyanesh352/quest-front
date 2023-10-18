import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Qform } from '../alerts/model/qform';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QserviceService {

  constructor(public http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  url:string="http://localhost:8083/api";

 

  save(que:Qform)

  {
console.log("from q service");
const headers = { 'content-type': 'application/json'}  
    return this.http.post<Qform>(this.url+"/addquestion",que,{'headers':headers});

  }
  getData(): Observable<Qform[]>
  {
    return this.http.get<Qform[]>(this.url+"/getquestions");
  }

  getqdetailsById(id:string){
    return this.http.get(this.url+"/qbank/quedetails/"+id)
  }




}
