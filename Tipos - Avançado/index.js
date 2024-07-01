"use strict";
// Tipos de Array
var numbers = [1, 2, 3];
console.log(numbers[1]);
var names = ["Felipe", "Lima", "Rodrigues"];
console.log(names[2]);
const listaDoida = ["Felipe", 10, true];
console.log(listaDoida);
// Tipagem de funções
function soma(numbers) {
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
    const sallary = 1412;
    console.log(sallary);
}, 2000);
// Determinar tipos de objetos
function passCoordinates(coord) {
    console.log(`Coordenada X: ${coord.x}`);
    console.log(`Coordenada Y: ${coord.y}`);
}
const objCoord = {
    x: 121,
    y: -121,
};
passCoordinates(objCoord);
// Propriedades opcionais
const pessoa = {
    name: "Felipe",
    idade: 18,
};
//Undefined
function nameValidation(firstName, lastName) {
    if (lastName !== undefined) {
        console.log(`Olá meu mano ${firstName} ${lastName}`);
        return;
    }
    console.log(`Olá ${firstName}, como vai?`);
}
nameValidation("Felipe");
// Union Types
function showBallance(balance) {
    console.log(`Seu saldo é de R$${balance}`);
}
showBallance(10000);
showBallance("1214312");
//Typeof
function showUserRole(role) {
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
function showId(id) {
    console.log(id);
}
showId(12);
showId("1b");
function showLivro(livro) {
    console.log(`O livro ${livro.name} tem ${livro.pages} páginas e foi escrito por ${livro.author}`);
}
const livroOne = {
    name: "Arte da Guerra",
    pages: 123,
    author: "Felipe Lima",
};
showLivro(livroOne);
const p1 = {
    nome: "Felipe",
    idade: 18,
    estadoCivil: "Casado",
};
//Symbol
let sA = Symbol("a");
let sB = Symbol("a");
console.log(sA === sB); //Serão consideradas diferentes
