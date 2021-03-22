"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    Object.defineProperty(Phone.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    return Phone;
}());
exports.Phone = Phone;
