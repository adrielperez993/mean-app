import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];
  readonly URL_API = 'http://localhost:3000/api/employees/';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private _http: HttpClient) {
    this.selectedEmployee = new Employee();
   }

  getEmployees() {
    return this._http.get(this.URL_API, this.httpOptions)
    .pipe(map(res => res));
  }

  postEmployees(employee: Employee) {
    return this._http.post(this.URL_API, employee, this.httpOptions)
    .pipe(map(res => res));
  }

  putEmployees(employee: Employee) {
    return this._http.put(`${this.URL_API}${employee._id}`, employee, this.httpOptions)
    .pipe(map(res => res));
  }

  deleteEmployee(_id: string) {
    return this._http.delete(`${this.URL_API}${_id}`, this.httpOptions)
    .pipe(map(res => res));
  }
}
