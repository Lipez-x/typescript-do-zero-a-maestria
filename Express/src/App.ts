import express, { Request, Response } from "express";
import { UserController } from "./Controllers/UserController";
import { UserInterface } from "./Interfaces/UserInterface";
const app = express();
const port = 3000;
app.use(express.json());

const userController = new UserController();

app.post("/create", (req: Request, res: Response) => {
  const user: UserInterface = req.body;
  const createUser = userController.create(user);
  return res.json(createUser);
});

app.get("/home", (req: Request, res: Response) => {
  const users = userController.read();
  return res.json(users);
});

app.put("/update/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user: UserInterface = req.body;
  const updateUser = userController.update(id, user);
  return res.json(updateUser);
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
