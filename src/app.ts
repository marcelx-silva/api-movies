import express from 'express';
import {movieRoutes} from "./routes/MovieRoutes";

export const app = express();
app.use(express.json());
app.use(movieRoutes);

