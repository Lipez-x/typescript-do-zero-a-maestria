import { Router } from "express";
import { MovieController } from "../controllers/movieController";
import { validate } from "../middleware/handleValidation";
import { movieCreateValidation } from "../middleware/movieValidation";

const movie = new MovieController();

export const router = Router();

router.post("/create", movieCreateValidation(), validate, movie.create);
router.get("/", movie.getAll);
router.get("/:id", movie.getById);
router.put("/update/:id", movieCreateValidation(), validate, movie.update);
router.delete("/delete/:id", movie.delete);
