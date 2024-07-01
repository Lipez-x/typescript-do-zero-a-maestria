//Generics
function showData<T>(arg: T): string {
  return `Dado: ${typeof arg}`;
}

console.log(showData(4));
console.log(showData("Oi"));

//Constrains em generic
function showObject<T extends { name: string }>(obj: T): string {
  return `O nome do objeto é ${obj.name}`;
}

const obj1 = {
  name: "Faca",
  price: 18.99,
};

const obj2 = {
  name: "Fiat Uno",
  wheels: 4,
};

console.log(showObject(obj1), " - ", showObject(obj2));

//Interface com propriedades generics
interface Obj<T> {
  name: string;
  cor: string;
  wheels: T;
}

type Car = Obj<number>;

const myCar: Car = {
  name: "Corola",
  cor: "Branco",
  wheels: 4,
};

const myComputer: Obj<boolean> = {
  name: "Lenovo ideapad 3i",
  cor: "Prata",
  wheels: false,
};

console.log(myComputer, myCar);

//Type Parameters
function showUserID<T, K extends keyof T>(user: T, key: K) {
  return `A chave do usuário é ${user[key]}`;
}

const user = {
  id: 2312312,
};

console.log(showUserID(user, "id"));

//Keyof type operator
type Persona = { name: string; age: number; passport: boolean };

type K = keyof Persona;

const myPerson: Persona = {
  name: "Charles",
  age: 30,
  passport: true,
};

function showKeys(persona: Persona, key: K) {
  return `Olá ${persona.name} seu "${key}" está como: ${persona[key]}`;
}

console.log(showKeys(myPerson, "passport"));

//Indexed Acess Type

type Player = { name: string; age: number; club: string; goals: number };

type goals = Player["goals"];

function showGoals(goals: goals) {
  return `Total goals in this season: ${goals}`;
}

const p1 = {
  name: "Vini Jr",
  age: 23,
  club: "Real Madrid",
  goals: 28,
};

console.log(showGoals(p1.goals));

//Conditional Expressions Type
interface Teste {
  showName(): string;
}

type myType = Teste extends { showNumber(): number } ? string : boolean;

const myType: myType = true; // É um boolean

//Template Literals Types

type teste = "One";
type teste2 = "Day";
type teste3 = teste | teste2;

const t: teste = "One";
const t2: teste2 = "Day";
const t3: teste3 = "One";
