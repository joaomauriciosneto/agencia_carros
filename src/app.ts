import express from 'express';
import cors from 'cors';
import { routesAgencia } from './routes/agencia.routes';

export const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routesAgencia);