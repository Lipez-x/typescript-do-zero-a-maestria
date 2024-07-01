//Interfaces
interface Pessoa {
  name: string;
  age: number;
  isMen: boolean;
}

function checkAgeMajority(pessoa: Pessoa) {
  console.log(`Olá ${pessoa.name}, vamos verificar se você deve se alistar...`);
  if (pessoa.age >= 18 && pessoa.isMen) {
    console.log("Você deve se alistar");
  } else {
    console.log("Você não precisa se alistar");
  }
}

const p1: Pessoa = {
  name: "Myria",
  age: 17,
  isMen: false,
};

checkAgeMajority(p1);

//Propriedades opcionais
interface User {
  email: string;
  role?: "Admin" | "Collaborator";
}

function checkRole(user: User) {
  if (user.role) {
    console.log(
      `Olá, seu email é ${user.email} e sua função no sistema é de: ${user.role}`
    );
  } else {
    console.log(`O usuário "${user.email}" não tem funções no sistema`);
  }
}

const u1: User = {
  email: "felipelima@gmail.com",
  role: "Admin",
};

const u2: User = {
  email: "lipezin@gmail.com",
};

checkRole(u1);
checkRole(u2);

//Readonly
interface Animal {
  name: string;
  weight: number;
  readonly species: string;
}

const dog: Animal = {
  name: "Menino",
  weight: 30.4,
  species: "Cachorro", //Essa propriedade não pode ser modificada
};

//Index Signature

interface Coord {
  [index: string]: number;
}

const coord: Coord = {
  x: 10,
  y: 9,
};

coord.z = 8;

console.log(coord);

//Extending Types
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superPowers: string[];
}

const humano: Human = {
  name: "Felipe",
  age: 22,
};

const naruto: SuperHuman = {
  name: "Naruto",
  age: 36,
  superPowers: ["Rasengan", "Kyubi", "Senin"],
};

console.log(humano, naruto);

//Intersection Types
interface Carachter {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

const shotgun: Gun = {
  type: "Shotgun",
  caliber: 12,
};

const arnold: Gun & Carachter = {
  name: "Arnold",
  type: shotgun.type,
  caliber: shotgun.caliber,
};

console.log(arnold);

//ReadOnlyArrays

let myArray: ReadonlyArray<string> = [
  "PS1",
  "PS2",
  "PS3",
  "PS4",
  "PS5",
  "Xbox 360",
  "Xbox One",
  "Xbox Series",
];

// myArray[3] = "Switch"; Não pode!!!!

myArray = myArray.map((item) => {
  return `Videogame: ${item}`;
});

console.log(myArray);

//Tuplas
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]; // Correto
//const myNumberArray: fiveNumbers = [1, 2, 3, 4]; Errado
//const myNumberArray : fiveNumbers= [1, 2, 3, 4, 5, 6]; Errado
//const myNumberArray: fiveNumbers = [1, true, "2", false, "Olá"]; Errado

type nameAndAge = [string, number];

const anonymous: nameAndAge = ["User", 32];

//Tuplas com readonly

function showNumber(numbers: readonly [number, number]) {
  // numbers[0] = 12; Não pode
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumber([1, 2]);
