//Llamar base de datos
const mysql = require("mysql");
//Llamar objeto database
const { database } = require('./keys');
//Soportar promesas
const { promisify } = require("util");
//Crear conexion
const pool = mysql.createPool(database);
//Obtener conexion
pool.getConnection((err, connection) => {
    if (err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if(connection) connection.release();
    console.log('DB is connected');
});

//Llamar a sql
pool.query = promisify(pool.query);

//Exportar pool
module.exports = pool;