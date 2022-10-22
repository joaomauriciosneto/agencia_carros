import { NextFunction, Request, Response } from "express";
import { fabricanteList } from "../data/fabricanteList";

export const fabricanteValidator = (req: Request, res: Response, next: NextFunction) => {

    const {nome} = req.body;

    const fabricante = fabricanteList.some(fab => fab.nome === nome);

    if(fabricante) {
        return res.status(400).send({
            ok: false,
            message: 'Esse fabrciante já existe!'
        })
    }
    next();

}