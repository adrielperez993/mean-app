export class Employee {

  constructor(_id = '', name = '', position = '', office = '', salary = 0) {
    this._id = _id;
    this.Name = name;
    this.Position = position;
    this.Office = office;
    this.Salary = salary;
  }

  _id: string;
  Name: string;
  Position: string;
  Office: string;
  Salary: number;
}
