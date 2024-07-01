"use strict";
class Pessoa {
    constructor(name, age, health, balance) {
        this.name = name;
        this.age = age;
        this.health = health;
        this.balance = balance;
    }
    showDetails() {
        return `Nome: ${this.name}, Idade: ${this.age}`;
    }
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    get getHealth() {
        return this.health;
    }
    get getBalance() {
        return this.balance;
    }
    set setName(name) {
        this.name = name;
    }
    set setAge(age) {
        this.age = age;
    }
    set setHealth(health) {
        this.health = health;
    }
    set setBalance(balance) {
        this.balance = balance;
    }
}
class Employee extends Pessoa {
    constructor(name, age, health, balance, office, salary) {
        super(name, age, health, balance);
        this.office = office;
        this.salary = salary;
    }
    showDetails() {
        return `Nome: ${this.getName}, Idade: ${this.getAge}, Emprego: ${this.office}, Salário: ${this.salary}`;
    }
    receive() {
        let balance = this.getBalance;
        balance += this.salary;
        this.setBalance = balance;
    }
    showBalance() {
        console.log(`Olá ${this.getName}, salário caiu na conta! Agora você tem R$${this.getBalance} de saldo. Deseja investir?`);
    }
    get getOffice() {
        return this.office;
    }
    get getSalary() {
        return this.salary;
    }
    set setOffice(office) {
        this.office = office;
    }
    set setSalary(salary) {
        this.salary = salary;
    }
}
class Children extends Pessoa {
    constructor(name, age, health, balance, schoolYear) {
        super(name, age, health, balance);
        this.schoolYear = schoolYear;
    }
    showDetails() {
        return `Nome: ${this.getName}, idade: ${this.getAge}, ano escolar: ${this.schoolYear}º`;
    }
    get getSchoolYear() {
        return this.schoolYear;
    }
    set setSchoolYear(schoolYear) {
        this.schoolYear = schoolYear;
    }
}
class TesteUser {
}
TesteUser.login = "login123";
class HouseDetails {
}
const House = class extends HouseDetails {
    constructor(road, number) {
        super();
        this.road = road;
        this.number = number;
        this.road = road;
        this.number = number;
    }
    get getRoad() {
        return this.road;
    }
    get getNumber() {
        return this.number;
    }
    showHouseDetails() {
        return `Casa localizada em ${this.road} - ${this.number}`;
    }
};
const Felipe = new Employee("Felipe", 18, 100, 0, "Programador", 2200.0);
const Davi = new Children("Davi", 11, 100, 0, 6);
const myHoyse = new House("Rua Emídio Alameida", "890");
const yourHouse = new House("Rua lá", 876);
for (let i = 0; i < 12; i++) {
    Felipe.receive();
}
Felipe.showBalance();
Felipe.setHealth = 80;
console.log(Felipe.getHealth);
console.log(Felipe.showDetails());
console.log(Davi.showDetails());
console.log(TesteUser.login);
console.log(myHoyse.getRoad, " - ", myHoyse.getNumber);
console.log(yourHouse.showHouseDetails());
