import { Request, Response } from "express";
import { fabricanteList } from "../data/fabricanteList";
import { Fabricante } from "../models/Fabricante";

export class FabricanteController {

    public listarFabricantePorId(req: Request, res: Response) {

        try {

            const {idFab} = req.params;

            const fabricante = fabricanteList.find(fab => fab.id == idFab);

            if(!fabricante) {
                return res.status(404).send({
                    ok: false,
                    message: 'Fabricante não encontrado!'
                })
            }
            
            return res.status(200).send({
                ok: true,
                message: 'Fabricante encontrado!',
                data: fabricante
            })

        } catch (error: any) {
            
            return res.status(500).send({
                ok: false,
                message: 'Instabilidade no servidor!',
                error: error.toString()
            })

        }

    }

    public listarTodos(req: Request, res: Response) {

        try {

            let fabricante = fabricanteList;

            let returnFabricante = fabricante.map(item => {
                return item.getFabricante();
            })

            return res.status(200).send({
                ok: true,
                message: 'Lista de todos os fabricantes!',
                data: returnFabricante
            })
            
        } catch (error: any) {
            
            return res.status(500).send({
                ok: false,
                message: 'Instabilidade no servidor!',
                error: error.toString()
            })

        }

    }

    public novoFabricante(req: Request, res: Response) {

        try {

            const {nome} = req.body;

            if(!nome) {
                return res.status(400).send({
                    ok: false,
                    message: 'Nome do fabricante não fornecido!'
                })
            }

            const fabricante = new Fabricante(nome);

            fabricanteList.push(fabricante);

            return res.status(201).send({
                ok: true,
                message: 'Fabricante adicionado com sucesso!',
                data: fabricante
            })

            
        } catch (error: any) {
            
            return res.status(500).send({
                ok: false,
                message: 'Instabilidade no servidor!',
                error: error.toString()
            })

        }

    }

    public editarFabricante(req: Request, res: Response) {

        try {

            const {idFab} = req.params;
            const {nome} = req.body;

            const fabricante = fabricanteList.find(fab => fab.id == idFab);

            if(!fabricante) {
                return res.status(404).send({
                    ok: false,
                    message: 'Fabricante não encontrado!'
                })
            }

            fabricante.nome = nome

            return res.status(200).send({
                ok: true,
                message: 'Fabricante atualizado com sucesso!',
                data: fabricante
            })
            
        } catch (error: any) {
            
            return res.status(500).send({
                ok: false,
                message: 'Instabilidade no servidor!',
                error: error.toString()
            })

        }

    }

    public deletarFabricante(req: Request, res: Response) {

        try {

            const {idFab} = req.params;

            const fabricante = fabricanteList.findIndex(fab => fab.id == idFab);

            if(!fabricante) {
                return res.status(404).send({
                    ok: false,
                    message: 'Fabricante não encontrado!'
                })
            }

            fabricanteList.splice(fabricante, 1)

            return res.status(200).send({
                ok: true,
                message: 'Fabricante excluído com sucesso!'
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