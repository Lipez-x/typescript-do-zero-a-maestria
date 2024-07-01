import { UserInterface } from "../Interfaces/UserInterface";
import { User } from "../models/User";

export class UserController {
  private id;
  private item: User[];

  constructor() {
    this.id = 1;
    this.item = [];
  }

  create(user: UserInterface) {
    const createUser = new User(this.id++, user.login, user.password);
    this.item.push(createUser);
    return "Usuário criado com sucesso";
  }

  read() {
    return this.item;
  }

  update(id: number, user: UserInterface) {
    const updateUser = this.item.find((user: User) => user.getId === id);
    if (updateUser) {
      updateUser.setLogin = user.login;
      updateUser.setPassword = user.password;
      return "Usuário atualizado com sucesso";
    }
    return "Usuário não encontrado";
  }

  delete(id: number) {
    const user = this.item.findIndex((user: User) => user.getId === id);
    if (user !== -1) {
      this.item.splice(user, 1);
      return "Usuário deletado com sucesso";
    }
    return "Usuário não encotrado";
  }
}

// C - Create
// R - Read
// U - Upate
// D - Delete
