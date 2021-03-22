export class Mail {
    private _tipo: string;
    public get tipo() {
        return this._tipo;
    }
    public set tipo(value) {
        this._tipo = value;
    }

    private _direccion: string;
    public get direccion() {
        return this._direccion;
    }
    public set direccion(value) {
        this.direccion = value;
    }

    constructor(tipo: string, direccion: string) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
}