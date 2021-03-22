import { Address } from "./address";
import { Mail } from "./mail";
import { Person } from "./person";
import { Phone } from "./phone";

let personas: Person[] = [];

personas.push(new Person(
    "Laura",
    "González Huertas",
    46,
    "32765510T",
    "13/02/1975",
    "rojo",
    "mujer",
    new Address(
        "Calle Fuertes",
        25,
        3,
        "B",
        85003,
        "Madrid",
        "Madrid"
    ),
    new Mail(
        "Trabajo",
        "lauragh@aytomadrid.es"
    ),
    new Phone(
        "Trabajo",
        632009876
    ),
    "Contactar únicamente de 8 a 16h"
));

personas.push(new Person(
    "Francisco",
    "Hierro Jódar",
    25,
    "25768901Z",
    "05/08/1996",
    "verde",
    "hombre",
    new Address(
        "Plaza de la Concordia",
        3,
        5,
        "Derecha",
        29005,
        "Málaga",
        "Málaga"
    ),
    new Mail(
        "Personal",
        "franciscohierroj@gmail.com"
    ),
    new Phone(
        "Casa",
        951247590
    ),
    ""
));

personas.push(new Person(
    "Gabriela",
    "Vargas Hughes",
    67,
    "89504321D",
    "13/12/1954",
    "morado",
    "mujer",
    new Address(
        "Avenida José Laguillo",
        6,
        4,
        "A",
        41003,
        "Sevilla",
        "Sevilla"
    ),
    new Mail(
        "Personal",
        "gabrielitavargas@hotmail.com"
    ),
    new Phone(
        "Personal",
        678521001
    ),
    "Vacaciones en agosto"
));

let personaFiltrada: Person = personas.filter(a => a.dni == "25768901Z")[0];

let nuevaDireccion: Address = new Address("Calle Sombra", 98, 2, "I", 41987, "Sevilla", "Sevilla");

personaFiltrada.direcciones.pop();
personaFiltrada.direcciones.push(nuevaDireccion);

let nuevoMail: Mail = new Mail("Trabajo","fhierroj@talent.org");

personaFiltrada.mails.pop();
personaFiltrada.mails.push(nuevoMail);

let nuevoTelefono: Phone = new Phone("Trabajo", 600987234);

personaFiltrada.telefonos.pop();
personaFiltrada.telefonos.push(nuevoTelefono);

for(let i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}