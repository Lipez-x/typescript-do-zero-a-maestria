// Tipos de Array
var numbers: number[] = [1, 2, 3];

console.log(numbers[1]);

var names: Array<string> = ["Felipe", "Lima", "Rodrigues"];

console.log(names[2]);

const listaDoida: any[] = ["Felipe", 10, true];

console.log(listaDoida);

// Tipagem de funções

function soma(numbers: number[]): number {
  let soma = 0;

  for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
  }

  return soma;
}

const somaArray = soma(numbers);
console.log(somaArray);

// Função Anônima
setTimeout(function () {
  const sallary: number = 1412;
  console.log(sallary);
}, 2000);

// Determinar tipos de objetos
function passCoordinates(coord: { x: number; y: number }) {
  console.log(`Coordenada X: ${coord.x}`);
  console.log(`Coordenada Y: ${coord.y}`);
}

const objCoord = {
  x: 121,
  y: -121,
};

passCoordinates(objCoord);

// Propriedades opcionais
const pessoa: { name: string; sobrenome?: string; idade: number } = {
  name: "Felipe",
  idade: 18,
};

//Undefined
function nameValidation(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    console.log(`Olá meu mano ${firstName} ${lastName}`);
    return;
  }

  console.log(`Olá ${firstName}, como vai?`);
}

nameValidation("Felipe");

// Union Types
function showBallance(balance: string | number | boolean) {
  console.log(`Seu saldo é de R$${balance}`);
}

showBallance(10000);
showBallance("1214312");

//Typeof
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    if (role === false) {
      console.log("Reprovado");
      return;
    }

    role = "User";
  }
  console.log(role);
  return;
}

showUserRole(true);
showUserRole("Admin");

//Type Alias
type ID = string | number;
function showId(id: ID) {
  console.log(id);
}

showId(12);
showId("1b");

//Interfaces
interface Livro {
  name: string;
  pages: number;
  author: string;
}

function showLivro(livro: Livro) {
  console.log(
    `O livro ${livro.name} tem ${livro.pages} páginas e foi escrito por ${livro.author}`
  );
}

const livroOne: Livro = {
  name: "Arte da Guerra",
  pages: 123,
  author: "Felipe Lima",
};

showLivro(livroOne);

//Literal Types
interface pessoa {
  nome: string;
  idade: number;
  estadoCivil?: "Solteiro" | "Casado" | "Divorciado";
}

const p1: pessoa = {
  nome: "Felipe",
  idade: 18,
  estadoCivil: "Casado",
};

//Symbol
let sA: symbol = Symbol("a");
let sB: symbol = Symbol("a");

console.log(sA === sB); //Serão consideradas diferentes
