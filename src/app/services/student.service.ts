import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import 'rxjs/Rx';

@Injectable()
export class StudentService {
 
  private apiURl= 'http://localhost:8080/api';
  
  constructor(private http: Http) { }
  getStudent(): Observable <any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.apiURl +'/student', {headers: headers})
    .map(res => res.json());
  }
  
  createStudent(data: any): Observable <any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.apiURl +'/student', data, {headers: headers})
    .map(res => res.json());
  }
  updateStudent(data: any): Observable <any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.apiURl +'/student/' + data._id, data, {headers: headers})
    .map(res => res.json());
  }
  deleteStudent(id: any): Observable <any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.apiURl +'/student/' + id, {headers: headers})
    .map(res => res.json());
  }
}

