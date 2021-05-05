//Requerir express para crear servidor
const express = require("express");
//Middleward: funcion para procesar algo antes que termine
const morgan = require("morgan");
//Permite conectar la Api con otras aplicaciones
const cors = require("cors");

//Ejecutar express
const app = express();

//Configurar puerto -- variables de entorno
app.set('port', process.env.PORT || 4000);

//Indica a cors de donde dar permiso para acceder a la Api (dejar en blanco, para dejar acceder desde cualquier app)
app.use(cors({origin: "http://localhost:4200"}));
//Ejecutar morgan
app.use(morgan('dev'));
//Express entienda JSON
app.use(express.json());
//Express entienda datos enviados de formulario
app.use(express.urlencoded({ extended: false}));

//Llamar la ruta
app.use('/api/employees', require('./routes/employees.routes'));

//Exportar modulo
module.exports = app;