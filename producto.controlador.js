//Cargar el modelo de los productos
var producto_modelo = require("../modelos/producto.modelo.js");

//Metodo web PARA obtener un producto
exports.obtener = (req, res) => {
    producto_modelo.obtener(req.params.id, (err, data) => {

        //Verficar si no hubi error
        if (err) {
            if (err.tipo == "No Encontrado") {
                res.status(404).send({ message: `No se encontro producto con el Id ${req.params.id}` });
            }
            else {
                res.status(500).send({ message: `Error obteniendo el producto con el id ${req.params.id}` });

            }
        }
        else {
            //Si no hay error se devuelve el registro obtenido
            res.send(data);
        }

    });

}//Fin exports.obtener

//Metodo web para obtener la lista de productos

exports.listar = (req, res) => {
    producto_modelo.listar((err, data) => {

        //Verficar si no hubo error
        if (err) {

            res.status(500).send({ message: "Error obteniendo la lista de productos" });
        }

        else {
            //Se devuelve los registros obtenidos
            res.send(data);

        }
    });
}       

exports.actualizar = (req, res) => {
    //validar que la solicitud tenga datos
    if (!req.body) {
        res.status(400).send({ message: 'El contenido del mensaje debe tener información con el producto' });
    }

    producto_modelo.actualizar(new producto_modelo(req.body),
        (err, data) => {
            //Verificar si hubo error
            if (err) {
                if (err.tipo == "No encontrado") {
                    console.log(data);
                    res.status(404).send({ message: 'No se actualizó ningun producto' });
                }
                else {
                    res.status(500).send({ message: 'Error actualizando el producto' });
                }
            }
            else {
                //Se devuelve el registro actualizado
                res.header('Access-Control-Allow-Origin', '*');
                res.send(data);
            }
        });
}

//Metodo web para eliminar una moneda
exports.eliminar = (req, res) => {
    producto_modelo.eliminar(req.params.id,
        (err, data) => {
            //Verificar si hubo error
            if (err) {
                if (err.tipo == "No encontrado") {
                    res.status(404).send({ message: `No se econtró el producto con id:${req.params.id}` });
                }
                else {
                    res.status(500).send({ message: 'Error eliminando el producto ' });
                }
            }
            else {
                //Se devuelve el registro actualizado
                res.header('Access-Control-Allow-Origin', '*');
                res.send({ message: `El producto con id:${req.params.id} fue eliminado` });
            }
        });
}