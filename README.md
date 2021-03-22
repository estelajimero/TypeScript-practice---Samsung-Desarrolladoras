Práctica TypeScript - Samsung Desarrolladoras

Se propone realizar unas clases para almacenar la lógica de una agenda con los datos
personales de los individuos: direcciones, teléfonos, mails… Cada clase ha de
crearse en un archivo TypeScript diferente.

Persona: 
Nombre 
Apellidos 
Edad 
DNI 
Cumpleaños 
Color favorito 
Sexo 
Direcciones
Mails
Teléfonos
Notas

Dirección:
Calle
Número
Piso
Letra
Código postal
Población
Provincia

Mail:
Tipo
Dirección

Teléfono:
Tipo 
Número 

Se valorará la correcta selección de tipos y la definición de funciones necesarias
para acceso a los atributos.

Una vez realizadas las clases:
* Se creará un módulo principal (main) en el que se utilicen las clases definidas
para crear 3 registros de persona y mostrarlos en el terminal mediante console.
log., utilizando las funciones necesarias definidas en las clases para obtener
los datos.

* Se modificará uno de los registros de persona añadidos, realizando la búsqueda
por DNI y añadiendo una nueva dirección, un nuevo mail y un nuevo
teléfono. Estos cambios se deben realizar mediante el uso de métodos definidos
previamente en las clases.
 
* Se mostrarán desde el módulo principal los 3 registros con los cambios realizados
anteriormente en la consola.

-----------------------------------------

Comentarios sobre la práctica:

- como no me quedó muy claro si los nuevos registros sobrescriben o no (primero se pidió una cosa, el día de la entrega se concretó otra), en mi caso he incluido
el método pop() para sacar la anterior y push() para incluir la nueva. Si quiere que se añadan las dos, únicamente deberían comentarse los métodos pop().