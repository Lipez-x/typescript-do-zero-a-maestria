export class User {
  private login;
  private password;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }

  get getLogin() {
    return this.login;
  }

  set setLogin(login: string) {
    this.login = login;
  }
}

export const uTwo = new User("indna", "dass123");

export class ClientFromUser extends User {
  private name;
  private age;

  constructor(name: string, age: number, login: string, password: string) {
    super(login, password);
    this.name = name;
    this.age = age;
  }

  public showDetails() {
    return `O usuário "${this.getLogin}" se chama ${this.name} e tem ${this.age} anos de idade.`;
  }
}

export default function helloWorld() {
  return "Olá mundo!";
}
