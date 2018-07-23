import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(
    protected employeeService: EmployeeService,
    public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees()
    .subscribe(res => {
      this.employeeService.employees = res as Employee[];
      console.log(res);
    });
  }

  addEmployee(empForm: NgForm): void {
    console.log(empForm.value);
    this.employeeService.postEmployees(empForm.value)
    .subscribe(res => {
      this.resetForm(empForm);
      console.log(res);
      this.openSnackBarMessage('Employee saved successfully!');
    });
  }

  resetForm(form?: NgForm) {
    this.openSnackBarMessageAndAction('Employee saved successfully!', 'UNDO');
    // if (form) {
    //   form.reset();
    //   this.employeeService.selectedEmployee = new Employee();
    // }
  }


  // SnackBars
  openSnackBarMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  openSnackBarMessageAndAction(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }
}
