import express from 'express';
import {movieRoutes} from "./routes/MovieRoutes";
import {genreRoutes} from "./routes/GenreRoutes";
import {userRoutes} from "./routes/UserRoutes";

export const app = express();
app.use(express.json());
app.use(movieRoutes);
app.use(genreRoutes)
app.use(userRoutes);

