import express from 'express';
import cors from 'cors';
import * as dotvenv from 'dotenv';
import { routesAgencia } from './routes/agencia.routes';

dotvenv.config();

export const app = express();

app.use(express.json());
app.use(cors());

app.use('/agencia', routesAgencia);