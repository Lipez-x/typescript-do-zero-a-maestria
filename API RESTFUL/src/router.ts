import { Request, Response, Router } from "express";
import { MovieController } from "./controllers/movieController";

const router = Router();

const movie = new MovieController();

router.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Teste API RESTful" });
});

router.post("/", movie.create);

export default router;
