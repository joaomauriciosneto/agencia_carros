import { v4 as idVendas } from "uuid";
import { Modelo } from "./Modelo";

export class Vendas {

    private _id: string;

    constructor(
        private _dataVenda: string,
        private _tipoPagamento: string,
        private _modelo: Modelo[]
    ){
        this._id = idVendas();
        this._modelo = this._modelo ?? [];
    }

    public get dataVenda() {
        return this._dataVenda;
    }

    public set dataVenda(dataVenda: string) {
        this._dataVenda = dataVenda;
    }

    public get tipoPagamento() {
        return this._tipoPagamento;
    }

    public set tipoPagamento(tipoPagamento: string) {
        this._tipoPagamento = tipoPagamento;
    }

    public get modelo() {
        return this._modelo;
    }

    public get id() {
        return this._id
    }

    public getVendas() {
        return {
            id: this._id,
            data: this._dataVenda,
            modelo: this._modelo,
            tipo: this._tipoPagamento
        }
    }

}