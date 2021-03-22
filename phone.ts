export class Phone {
    private _tipo: string;
    public get tipo() {
        return this._tipo;
    }
    public set tipo(value) {
        this._tipo = value;
    }

    private _numero: number;
    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }

    constructor(tipo: string, numero: number) {
        this._tipo = tipo;
        this._numero = numero;
    }
}