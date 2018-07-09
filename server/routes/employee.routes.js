const express = require('express');
const router = express.Router();
const _employee = require('../controllers/employee.controller');

router.get('/', _employee.getEmployees);
router.post('/', _employee.addEmployee);
router.get('/:id', _employee.getEmployee);
router.put('/:id', _employee.updateEmployee);
router.delete('/:id', _employee.deleteEmployee);

module.exports = router;