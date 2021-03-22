"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var address_1 = require("./address");
var mail_1 = require("./mail");
var person_1 = require("./person");
var phone_1 = require("./phone");
var personas = [];
personas.push(new person_1.Person("Laura", "González Huertas", 46, "32765510T", "13/02/1975", "rojo", "mujer", new address_1.Address("Calle Fuertes", 25, 3, "B", 85003, "Madrid", "Madrid"), new mail_1.Mail("Trabajo", "lauragh@aytomadrid.es"), new phone_1.Phone("Trabajo", 632009876), "Contactar únicamente de 8 a 16h"));
personas.push(new person_1.Person("Francisco", "Hierro Jódar", 25, "25768901Z", "05/08/1996", "verde", "hombre", new address_1.Address("Plaza de la Concordia", 3, 5, "Derecha", 29005, "Málaga", "Málaga"), new mail_1.Mail("Personal", "franciscohierroj@gmail.com"), new phone_1.Phone("Casa", 951247590), ""));
personas.push(new person_1.Person("Gabriela", "Vargas Hughes", 67, "89504321D", "13/12/1954", "morado", "mujer", new address_1.Address("Avenida José Laguillo", 6, 4, "A", 41003, "Sevilla", "Sevilla"), new mail_1.Mail("Personal", "gabrielitavargas@hotmail.com"), new phone_1.Phone("Personal", 678521001), "Vacaciones en agosto"));
var personaFiltrada = personas.filter(function (a) { return a.dni == "25768901Z"; })[0];
var nuevaDireccion = new address_1.Address("Calle Sombra", 98, 2, "I", 41987, "Sevilla", "Sevilla");
personaFiltrada.direcciones.pop();
personaFiltrada.direcciones.push(nuevaDireccion);
var nuevoMail = new mail_1.Mail("Trabajo", "fhierroj@talent.org");
personaFiltrada.mails.pop();
personaFiltrada.mails.push(nuevoMail);
var nuevoTelefono = new phone_1.Phone("Trabajo", 600987234);
personaFiltrada.telefonos.pop();
personaFiltrada.telefonos.push(nuevoTelefono);
for (var i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}
