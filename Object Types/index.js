"use strict";
function checkAgeMajority(pessoa) {
    console.log(`Olá ${pessoa.name}, vamos verificar se você deve se alistar...`);
    if (pessoa.age >= 18 && pessoa.isMen) {
        console.log("Você deve se alistar");
    }
    else {
        console.log("Você não precisa se alistar");
    }
}
const p1 = {
    name: "Myria",
    age: 17,
    isMen: false,
};
checkAgeMajority(p1);
function checkRole(user) {
    if (user.role) {
        console.log(`Olá, seu email é ${user.email} e sua função no sistema é de: ${user.role}`);
    }
    else {
        console.log(`O usuário "${user.email}" não tem funções no sistema`);
    }
}
const u1 = {
    email: "felipelima@gmail.com",
    role: "Admin",
};
const u2 = {
    email: "lipezin@gmail.com",
};
checkRole(u1);
checkRole(u2);
const dog = {
    name: "Menino",
    weight: 30.4,
    species: "Cachorro", //Essa propriedade não pode ser modificada
};
const coord = {
    x: 10,
    y: 9,
};
coord.z = 8;
console.log(coord);
const humano = {
    name: "Felipe",
    age: 22,
};
const naruto = {
    name: "Naruto",
    age: 36,
    superPowers: ["Rasengan", "Kyubi", "Senin"],
};
console.log(humano, naruto);
const shotgun = {
    type: "Shotgun",
    caliber: 12,
};
const arnold = {
    name: "Arnold",
    type: shotgun.type,
    caliber: shotgun.caliber,
};
console.log(arnold);
//ReadOnlyArrays
let myArray = [
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
const myNumberArray = [1, 2, 3, 4, 5]; // Correto
const anonymous = ["User", 32];
//Tuplas com readonly
function showNumber(numbers) {
    // numbers[0] = 12; Não pode
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumber([1, 2]);
