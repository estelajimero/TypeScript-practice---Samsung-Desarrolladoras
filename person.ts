import { Address } from "./address";
import { Mail } from "./mail";
import { Phone } from "./phone";

export class Person {
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    
    private _apellidos: string;
    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }
    
    private _edad: number;
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    
    private _dni: string;
    public get dni(): string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni = value;
    }
    
    private _cumple: string;
    public get cumple(): string {
        return this._cumple;
    }
    public set cumple(value: string) {
        this._cumple = value;
    }
    
    private _colorFavorito: string;
    public get colorFavorito(): string {
        return this._colorFavorito;
    }
    public set colorFavorito(value: string) {
        this._colorFavorito = value;
    }
    
    private _sexo: string;
    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }
    
    private _direcciones: Address[] = [];
    public get direcciones(): Address[] {
        return this._direcciones;
    }
    public set direcciones(value: Address[]) {
        this._direcciones = value;
    }
    
    private _mails: Mail[] = [];
    public get mails(): Mail[] {
        return this._mails;
    }
    public set mails(value: Mail[]) {
        this._mails = value;
    }
    
    private _telefonos: Phone[] = [];
    public get telefonos(): Phone[] {
        return this._telefonos;
    }
    public set telefonos(value: Phone[]) {
        this._telefonos = value;
    }
    
    private _notas: string;
    public get notas(): string {
        return this._notas;
    }
    public set notas(value: string) {
        this._notas = value;
    }

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumple: string, colorFavorito: string, sexo: string, direcciones: Address, mails: Mail, telefonos: Phone, notas: string) 
    {
        this._nombre =  nombre;
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
}