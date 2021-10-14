module.exports= (app) => {

    var producto_controlador = require("../controladores/producto.controlador.js");

    //metodo que obtiene una moneda
    app.get("/producto/:id",producto_controlador.obtener);

    //metodo listar las monedas
    app.get("/producto",producto_controlador.listar);

    //metodo que actualiza una moneda (INSERT-UPDATE)una moneda
    app.post("/producto/nuevo",producto_controlador.actualizar);

    //metodo que elimina una moneda
    app.delete("/producto/eliminar/:id", producto_controlador.eliminar);

}