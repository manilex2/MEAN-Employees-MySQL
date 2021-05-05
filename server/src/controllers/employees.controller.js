const pool = require("../database");

//Crear objeto
const employeesCtrl = {};

//Funciones
employeesCtrl.getEmployees = async (req, res) => {
    const employees = await pool.query('SELECT * FROM employees');
    res.json(employees);
};
employeesCtrl.createEmployee = async (req, res) => {
    const { name, position, office, salary } = req.body;
    const newEmployee = {
        name,
        position,
        office,
        salary
    };
    await pool.query('INSERT INTO employees SET ?', [newEmployee]);
    res.json(newEmployee);
};
employeesCtrl.getEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);
    console.log(employee);
    res.send(employee);
};
employeesCtrl.editEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, position, office, salary } = req.body;
    const editEmployee = {
        name,
        position,
        office,
        salary
    };
    await pool.query('UPDATE employees SET ? WHERE id = ?', [editEmployee, id]);
    res.send(editEmployee);
};
employeesCtrl.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = await pool.query('DELETE FROM employees WHERE id = ?', [id]);
    res.send(employee);
};

//Exportar constante
module.exports = employeesCtrl;