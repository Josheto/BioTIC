-- Borrar DB para pruebas
DROP DATABASE IF EXISTS biotics;

-- Crear la BD
CREATE DATABASE IF NOT EXISTS biotics;

-- Usar la base
USE biotics;

-- Crear la tabla producto
CREATE TABLE IF NOT EXISTS producto(
	Id INT NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Valor INT NOT NULL,
    Proveedor VARCHAR(100) NOT NULL,
    PRIMARY KEY(Id)
);

-- Insertar 10 productos de ejemplo
INSERT INTO producto(Nombre,Valor,Proveedor) VALUES ("Suavitel",5000,"Proveedor 1");
INSERT INTO producto(Nombre,Valor,Proveedor) VALUES ("Colgate",3500,"Proveedor 2");
INSERT INTO producto(Nombre,Valor,Proveedor) VALUES ("DogChow",10500,"Proveedor 1");
INSERT INTO producto(Nombre,Valor,Proveedor) VALUES ("FIdeos",8500,"Proveedor 3");
INSERT INTO producto(Nombre,Valor,Proveedor) VALUES ("Computador",5000,"Proveedor 2");
INSERT INTO producto(Nombre,Valor,Proveedor) VALUES ("Llanta",30000,"Proveedor 3");
INSERT INTO producto(Nombre,Valor,Proveedor) VALUES ("Bombillos",1200,"Proveedor 1");
INSERT INTO producto(Nombre,Valor,Proveedor) VALUES ("Arroz",3300,"Proveedor 2");
INSERT INTO producto(Nombre,Valor,Proveedor) VALUES ("Cafe",2550,"Proveedor 3");

-- Listar todos los productos
SELECT * FROM producto;

-- Procedimiento para listar todos los productos
DELIMITER //
CREATE PROCEDURE spListarProductos()
BEGIN
	SELECT Id, Nombre, Valor, Proveedor
		FROM producto
		ORDER BY Id;
END//

CREATE PROCEDURE spBuscarProductoPorNombre(
IN Nombre_producto INT
)
BEGIN
	SELECT Id
		FROM producto
			WHERE Nombre=Nombre_producto;
END//

CREATE PROCEDURE spActualizarProducto(
IN Id int,
IN Nombre varchar(50),
IN Valor INT,
IN Proveedor varchar(100)
)
BEGIN
	IF Id<=0 THEN
		INSERT INTO producto 
			(
			Nombre,Valor,Proveedor
			)
			VALUES(
			Nombre,Valor,Proveedor
			);
	ELSE
		UPDATE producto
			SET Nombre=Nombre,
			Valor=Valor,
			Proveedor=Proveedor
			WHERE Id =  Id;
	END IF;
END//