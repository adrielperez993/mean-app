const employeeController = {};
const Employee = require('../models/employee');

employeeController.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeController.addEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({Status: "Employee Saved"});
};

employeeController.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

employeeController.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        Name: req.body.Name,
        Position: req.body.Position,
        Office: req.body.Office,
        Salary: req.body.Salary
    };
    await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true } );
    res.json({Status: "Employee Updated"});
};

employeeController.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({Status: "Employee Deleted"});
};

module.exports = employeeController;