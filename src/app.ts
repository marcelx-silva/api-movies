import express from 'express';
import {movieRoutes} from "./routes/MovieRoutes";
import {genreRoutes} from "./routes/GenreRoutes";

export const app = express();
app.use(express.json());
app.use(movieRoutes);
app.use(genreRoutes)

