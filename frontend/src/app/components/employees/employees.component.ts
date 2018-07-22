import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(protected employeeService: EmployeeService) {

  }

  ngOnInit() {
  }

  addEmployee(empForm: NgForm): void {
    console.log(empForm.value);
    this.employeeService.postEmployees(empForm.value)
    .subscribe(res => {
      this.resetForm(empForm);
      console.log(res);
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
