export class User {
  private id;
  private login;
  private password;

  constructor(id: number, login: string, password: string) {
    this.id = id;
    this.login = login;
    this.password = password;
  }

  get getId() {
    return this.id;
  }

  get getLogin() {
    return this.login;
  }

  get getPassword() {
    return this.password;
  }

  set setId(id: number) {
    this.id = id;
  }

  set setLogin(login: string) {
    this.login = login;
  }

  set setPassword(password: string) {
    this.password = password;
  }
}
