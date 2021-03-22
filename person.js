"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(nombre, apellidos, edad, dni, cumple, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._direcciones = [];
        this._mails = [];
        this._telefonos = [];
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumple = cumple;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones.push(direcciones);
        this._mails.push(mails);
        this._telefonos.push(telefonos);
        this._notas = notas;
    }
    Object.defineProperty(Person.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (value) {
            this._apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (value) {
            this._dni = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "cumple", {
        get: function () {
            return this._cumple;
        },
        set: function (value) {
            this._cumple = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "colorFavorito", {
        get: function () {
            return this._colorFavorito;
        },
        set: function (value) {
            this._colorFavorito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (value) {
            this._sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "direcciones", {
        get: function () {
            return this._direcciones;
        },
        set: function (value) {
            this._direcciones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (value) {
            this._mails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "telefonos", {
        get: function () {
            return this._telefonos;
        },
        set: function (value) {
            this._telefonos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (value) {
            this._notas = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
