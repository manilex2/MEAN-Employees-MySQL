//Requerir base de datos
const db = require("./database")

//Requerir App
const app = require("./app")

//Escuchar servidor -- obtener valor de la variable
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));