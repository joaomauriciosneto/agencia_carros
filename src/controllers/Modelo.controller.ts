import { Request, Response } from "express";
import { fabricanteList } from "../data/fabricanteList";
import { Modelo } from "../models/Modelo";

export class ModeloController {

    public criarModelo(req: Request, res: Response) {

        try {

            const {idFab} = req.params;
            const {nome, ano, status} = req.body;

            if(!nome) {
                return res.status(400).send({
                    ok: false,
                    message: 'Nome não fornecido!'
                })
            }

            if(!ano) {
                return res.status(400).send({
                    ok: false,
                    message: 'Ano do modelo não fornecido!'
                })
            }

            if(!status) {
                return res.status(400).send({
                    ok: false,
                    message: 'Status do modelo não fornecido!'
                })
            }

            const modelo = new Modelo(nome, ano, status);
            const fabrciante = fabricanteList.find(fab => fab.id == idFab);

            if(!fabrciante) {
                return res.status(400).send({
                    ok: false,
                    message: 'Fabricante não encontrado!'
                })
            }

            fabrciante.modelo?.push(modelo)

            return res.status(201).send({
                ok: true,
                message: 'Modelo adicionado com sucesso!',
                data: modelo
            })
            
        } catch (error: any) {
            
            return res.status(500).send({
                ok: false,
                message: 'Instabilidade no servidor!',
                error: error.toString()
            })

        }

    }

    public editarModelo(req: Request, res: Response){

        try {

            const {idFab, idModel} = req.params;
            const {nome, ano, status} = req.body;

            const fabrciante = fabricanteList.find(fab => fab.id == idFab);

            if(!fabrciante) {
                return res.status(404).send({
                    ok: false,
                    message: 'Fabricante não encontrado!'
                })
            }

            const modelo = fabrciante.modelo?.find(model => model.id == idModel);

            if(!modelo) {
                return res.status(404).send({
                    ok: false,
                    message: 'Modelo não encontrado!'
                })
            }

            modelo.nome = nome;
            modelo.ano = ano;
            modelo.status = status;

            return res.status(200).send({
                ok: true,
                message: 'Dados do modelo atualizados com sucesso!',
                data: {
                    nome,
                    ano,
                    status
                }
            })
            
        } catch (error: any) {
            
            return res.status(500).send({
                ok: false,
                message: 'Instabilidade no servidor!',
                error: error.toString()
            })

        }

    }

    public listarModelosPorFabricante(req:Request, res:Response) {

        try {

            const {idFab} = req.params;
            const {nome, ano, status} = req.body;

            const fabrciante = fabricanteList.find(fab => fab.id == idFab);

            if(!fabrciante) {
                return res.status(404).send({
                    ok: false,
                    message: 'Fabricante não encontrado!'
                })
            }

            let fablist = fabrciante.modelo || [];

            if(nome) {
                fablist = fablist.filter(fab => fab.nome === nome);
            }

            if(ano) {
                fablist = fablist.filter(fab => fab.ano === ano);
            }

            if(status) {
                fablist = fablist.filter(fab => fab.status === status);
            }

            return res.status(200).send({
                modelo: fablist.map(item => {
                    return {
                        id: item.id,
                        nome: item.nome,
                        ano: item.ano,
                        status: item.status
                    }
                })
            })
            
        } catch (error: any) {
            
            return res.status(500).send({
                ok: false,
                message: 'Instabilidade no servidor!',
                error: error.toString()
            })

        }

    }

    public deletarModelo(req: Request, res: Response) {

        try {

            const {idFab, idModel} = req.params;

            const fabricante = fabricanteList.find(fab => fab.id == idFab);

            if(!fabricante) {
                return res.status(404).send({
                    ok: false,
                    message: 'Fabricante não encontrado!'
                })
            }

            const modelo = fabricante.modelo 
            ? fabricante.modelo.findIndex(model => model.id == idModel)
            : -1;

            if(modelo < 0) {
                return res.status(404).send({
                    ok: false,
                    message: 'Modelo não encontrado!'
                })
            }

            fabricante.modelo?.splice(modelo, 1)

            return res.status(200).send({
                ok: true,
                message: 'Modelo deletado com sucesso!'
            })
            
        } catch (error: any) {
            
            return res.status(500).send({
                ok: false,
                message: 'Instabilidade no servidor!',
                error: error.toString()
            })

        }

    }

}