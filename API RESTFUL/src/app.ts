import express, { Request, Response } from "express";
import config from "config";
import connect from "../config/db";
import morganMiddleware from "./middleware/morgan";
const app = express();
import { router as movieRoutes } from "./Routes/movieRouter";
app.use(express.json());

app.use(morganMiddleware);

app.use("/api/movie/", movieRoutes);

const port = config.get<number>("port");

app.listen(port, async () => {
  await connect();
});
