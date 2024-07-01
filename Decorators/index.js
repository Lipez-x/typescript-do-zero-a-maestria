"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    return function (target, propertKey, descriptor) {
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
        console.log("Passando do primeiro decorator...");
    };
}
function myDecorator2() {
    return function (target, propertKey, descriptor) {
        console.log("Passando do segundo decorator...");
    };
}
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class exClass {
    myMethod() {
        console.log(this);
        console.log("Executando função :)");
    }
}
__decorate([
    myDecorator2(),
    myDecorator(),
    enumerable(false)
], exClass.prototype, "myMethod", null);
const x = new exClass();
x.myMethod();
console.log("------------------------------------------------");
//Class Decorator
function classDecorator(constructor) {
    if (constructor.name === "User") {
        console.log("Validando usuário");
        console.log("Usuário criado");
    }
}
let User = class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
};
User = __decorate([
    classDecorator
], User);
const u1 = new User("user", "123");
//Property Decorator
function formatId() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.toLocaleUpperCase();
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatId()
], ID.prototype, "id", void 0);
const item = new ID("aj7761hbbna");
console.log(item.id);
