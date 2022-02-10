const express = require('express');
const router = express.Router();
const Employee = require('../model/employee');

router.get('/', async (req, res) => {
    try {
        let employeeList = await Employee.find();
        res.json(employeeList);
    } catch (err) {
        console.log("Error in get request\n", err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        let employeeById = await Employee.findById(req.params.id);
        res.json(employeeById);
    } catch (err) {
        console.log("Error in get request\n", err);
    }
})

router.post('/', async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        jobTitle: req.body.jobTitle,
        experienceInYears: req.body.experienceInYears
    })
    console.log("==========Emp=============\n\n", employee)
    try {
        let employee_1 = await employee.save();
        res.json(employee_1);
    } catch (err) {
        res.send("--------Error in post============\n", err);
    }
})

router.patch('/:id', async (req, res) => {
    try {
        let employeeEdit = await Employee.findById(req.params.id);
        employeeEdit.name = req.body.name;
        let employeeEditName = employeeEdit.save();
        res.json(employeeEditName);
    } catch (err) {
        res.send("Error in patch\n", err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let employeeEdit = await Employee.findById(req.params.id);
        let employeeEditName = employeeEdit.remove();
        res.json(employeeEditName);
    } catch (err) {
        res.send("Error in patch\n", err);
    }
})

module.exports = router;