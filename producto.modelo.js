//Cargar la libreria con la conexion a la bd
var sql = require("./bd.js");

//constructor 
var Producto = function (producto) {
    this.id = producto.Id;
    this.nombre= producto.Nombre;
    this.valor = producto.Valor;
    this.proveedor = producto.Proveedor;
}

//Metodo que obtiene registro basado en la clave primaria
Producto.obtener = (idProducto, resultado) => {

    sql.query(`SELECT * FROM producto WHERE Id=${idProducto}`, (err, res) => {

        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error Consultando un producto: ", err);
            resultado(err, null);
            return;

        }
        //La consulta devuelve resultados
        if (res.length) {
            console.log("Producto encontrado: ", res[0]);
            resultado(null, res[0]);
            return;


        }
        //No se encontraron registros
        resultado({ tipo: "No encontrado" }, null);

    });


}

//Metodo que obtiene la lista de productos
Producto.listar = (resultado) => {

    sql.query("CALL spListarProductos", (err, res) => {

        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando un producto: ", err);
            resultado(err, null);
            return;

        }
        //La consulta devuelve resultados
        if (res.length) {
            console.log("Lista de producto encontrados: ", res[0]);
            resultado(null,res[0]);
            return;
        }
       

    });


}


//Metodo que obtiene un registro basado en la clave primaria
Producto.actualizar = (producto1, resultado) => {
    sql.query('CALL spActualizarProducto(?, ?, ?, ?);', //consulta sql
        [producto1.id, producto1.nombre, producto1.valor, producto1.proveedor], //parametros
        (err, res) => {
            console.log(producto1);
            //Verificar si hubo error ejecutando la consulta
            if (err) {
                console.log("Error actualizando productos:", err);
                resultado(err, null);
                return;
            }
            //La consulta no afectó registros
            if (res.affectedRows == 0) {
                //No se encontraron registros
                //console.log(producto);
                resultado({ tipo: "No encontrado" }, null);
                return;
            }

            console.log("Producto actualizado :", producto1);
            resultado(null, { producto1 });

        });
}

//Metodo que elimina un registro 
Producto.eliminar = (idProducto, resultado) => {
    sql.query('DELETE FROM producto WHERE Id = ?', idProducto, (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error eliminando el producto:", err);
            resultado(err, null);
            return;
        }
        //La consulta no afectó registros
        if (res.affectedRows == 0) {
            //No se encontraron registros
            resultado({ tipo: "No encontrado" }, null);
            return;
        }

        console.log("Producto eliminido con id :", idProducto);
        resultado(null, res);
    });
}

module.exports = Producto;