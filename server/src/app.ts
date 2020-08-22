import {createConnection} from "typeorm";
import path from 'path';
import express from 'express';
import { router } from './routes';

createConnection();

const app = express();

app.use(express.json());
app.use(router);


export { app }