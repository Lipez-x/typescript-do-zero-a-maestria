"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientFromUser = exports.uTwo = exports.User = void 0;
class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
    get getLogin() {
        return this.login;
    }
    set setLogin(login) {
        this.login = login;
    }
}
exports.User = User;
exports.uTwo = new User("indna", "dass123");
class ClientFromUser extends User {
    constructor(name, age, login, password) {
        super(login, password);
        this.name = name;
        this.age = age;
    }
    showDetails() {
        return `O usuário "${this.getLogin}" se chama ${this.name} e tem ${this.age} anos de idade.`;
    }
}
exports.ClientFromUser = ClientFromUser;
function helloWorld() {
    return "Olá mundo!";
}
exports.default = helloWorld;
