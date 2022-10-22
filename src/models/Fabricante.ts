import { v4 as idFabricante } from "uuid";
import { Modelo } from "./Modelo";

export class Fabricante {

    private _id: string;

    constructor(
        private _nome: string,
        private _modelo?: Modelo[]
    ){
        this._id = idFabricante();
        this._modelo = this._modelo ?? [];
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

    public get modelo() {
        return this._modelo;
    }

    public getFabricante() {
        return {
            id: this._id,
            nome: this._nome,
            modelo: this._modelo
        }
    }

}