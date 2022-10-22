import { Router } from "express"
import { FabricanteController } from "../controllers/Fabricante.controller";
import { ModeloController } from "../controllers/Modelo.controller";
import { fabricanteValidator } from "../middlewares/fabricante.validator";

export const routesAgencia = Router();

routesAgencia.get('/fab', new FabricanteController().listarTodos);

routesAgencia.get('/fab/:idFab', new FabricanteController().listarFabricantePorId);

routesAgencia.post('/fab', [fabricanteValidator],new FabricanteController().novoFabricante);

routesAgencia.put('/fab/:idFab', new FabricanteController().editarFabricante);

routesAgencia.delete('/fab/:idFab', new FabricanteController().deletarFabricante);

routesAgencia.post('/model/:idFab', new ModeloController().criarModelo);

routesAgencia.put('/model/:idFab/:idModel', new ModeloController().editarModelo);

routesAgencia.get('/model/:idFab', new ModeloController().listarModelosPorFabricante);

routesAgencia.delete('/model/:idFab/:idModel', new ModeloController().deletarModelo);