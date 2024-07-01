interface ShowDetails {
  showDetails(): string;
}

class Pessoa implements ShowDetails {
  private name;
  private age;
  private health;
  private balance;

  constructor(name: string, age: number, health: number, balance: number) {
    this.name = name;
    this.age = age;
    this.health = health;
    this.balance = balance;
  }

  public showDetails(): string {
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

  set setName(name: string) {
    this.name = name;
  }

  set setAge(age: number) {
    this.age = age;
  }

  set setHealth(health: number) {
    this.health = health;
  }

  set setBalance(balance: number) {
    this.balance = balance;
  }
}

class Employee extends Pessoa {
  private office;
  private salary;

  constructor(
    name: string,
    age: number,
    health: number,
    balance: number,
    office: string,
    salary: number
  ) {
    super(name, age, health, balance);
    this.office = office;
    this.salary = salary;
  }

  public showDetails(): string {
    return `Nome: ${this.getName}, Idade: ${this.getAge}, Emprego: ${this.office}, Salário: ${this.salary}`;
  }

  public receive() {
    let balance = this.getBalance;
    balance += this.salary;
    this.setBalance = balance;
  }

  public showBalance() {
    console.log(
      `Olá ${this.getName}, salário caiu na conta! Agora você tem R$${this.getBalance} de saldo. Deseja investir?`
    );
  }

  get getOffice() {
    return this.office;
  }

  get getSalary() {
    return this.salary;
  }

  set setOffice(office: string) {
    this.office = office;
  }

  set setSalary(salary: number) {
    this.salary = salary;
  }
}

class Children extends Pessoa implements ShowDetails {
  private schoolYear;

  constructor(
    name: string,
    age: number,
    health: number,
    balance: number,
    schoolYear: number
  ) {
    super(name, age, health, balance);
    this.schoolYear = schoolYear;
  }

  public showDetails(): string {
    return `Nome: ${this.getName}, idade: ${this.getAge}, ano escolar: ${this.schoolYear}º`;
  }

  get getSchoolYear() {
    return this.schoolYear;
  }

  set setSchoolYear(schoolYear: number) {
    this.schoolYear = schoolYear;
  }
}

class TesteUser {
  static login = "login123";
}

abstract class HouseDetails {
  abstract showHouseDetails(): string;
}

const House = class<T, U> extends HouseDetails {
  constructor(private road: T, private number: U) {
    super();
    this.road = road;
    this.number = number;
  }

  get getRoad() {
    return this.road;
  }

  get getNumber() {
    return this.number;
  }

  showHouseDetails(): string {
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
