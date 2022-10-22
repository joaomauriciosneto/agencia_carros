import { v4 as idModelo } from "uuid";

export class Modelo {

    private _id: string;

    constructor(
        private _nome: string,
        private _ano: number,
        private _status: string
    ){
        this._id = idModelo();
    }

    public get id() {
        return this._id;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get ano() {
        return this._ano;
    }

    public set ano(ano: number) {
        this._ano = ano;
    }

    public get status() {
        return this._status;
    }

    public set status(status: string) {
        this._status = status;
    }

    public getModelo() {
        return {
            nome: this._nome,
            ano: this._ano,
            status: this._status
        }
    }
}