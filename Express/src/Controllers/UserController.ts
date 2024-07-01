import { User } from "../models/User";

export class UserController {
  private id;
  private item: User[];

  constructor() {
    this.id = 1;
    this.item = [];
  }

  create(login: string, password: string) {
    const user = new User(this.id++, login, password);
    this.item.push(user);
    return "Usuário criado com sucesso";
  }

  read() {
    return this.item;
  }

  update(id: number, login: string, password: string) {
    const user = this.item.find((user: User) => user.getId === id);
    if (user) {
      user.setLogin = login;
      user.setPassword = password;
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
