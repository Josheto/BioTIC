//cargar libreria para operar con BD MySQL
var mysql = require("mysql");

//Cargar el archivo de config
var configBD = require("../configuracion/bd.config.js");

//Crear la conecxion a la BD
var conexion = mysql.createConnection({

    host: configBD.SERVIDOR,
    user: configBD.USUARIO,
    password: configBD.CLAVE,
    database: configBD.BASEDATOS,
});

//Abrir la conexion a la BD
conexion.connect((error) => {

    if (error) throw error;
    //Mostrar por consola la conexion
    console.log("Conexion exitosa a la base de datos de productos");

});

module.exports = conexion;