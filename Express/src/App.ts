import express, { Request, Response } from "express";
import { User } from "./models/User";
import { UserController } from "./Controllers/UserController";
const app = express();
const port = 3000;
app.use(express.json());

const userController = new UserController();

app.post("/create", (req: Request, res: Response) => {
  const { login, password } = req.body;
  const user = userController.create(login, password);
  return res.json(user);
});

app.get("/home", (req: Request, res: Response) => {
  const users = userController.read();
  return res.json(users);
});

app.put("/update/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { login, password } = req.body;
  const user = userController.update(id, login, password);
  return res.json(user);
});

app.delete("/delete/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = userController.delete(id);
  return res.json(user);
});

app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Olá mundo!" });
});

app.listen(port, () => {
  console.log(`A aplicação está rodando na porta ${port}`);
});
