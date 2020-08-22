import path from "path";
import express from "express";
import cors from "cors";
import { createConnections } from "typeorm";

import { routes } from "./routes";

createConnections();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(routes);

export { app };
