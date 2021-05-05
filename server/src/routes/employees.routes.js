//Enrutador (para crear URLS)
const { Router } = require("express");
//Variable ruta
const router = Router();
//Llamar constante Hello
const employeesCtrl = require("../controllers/employees.controller");
//Llamar DB
const pool = require('../database');

//CRUD - Create, Read, Update, Delete
//Establecer rutas y funciones
router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployee);
router.get('/:id', employeesCtrl.getEmployee);
router.put('/:id', employeesCtrl.editEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);

//Exportar router
module.exports = router;