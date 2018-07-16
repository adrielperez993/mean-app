import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  readonly URL_API = 'http://localhost:3000/api/employees';

  constructor(private _http: HttpClient) { }

  getEmployees() {
    return this._http.get(this.URL_API);
  }

  postEmployees(employee: Employee) {
    return this._http.post(this.URL_API, employee);
  }

  putEmployees(employee: Employee) {
    return this._http.put(`${this.URL_API}/${employee._id}`, employee);
  }

  deleteEmployee(_id: string) {
    return this._http.delete(`${this.URL_API}/${_id}`);
  }
}
