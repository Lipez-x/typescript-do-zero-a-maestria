"use strict";
//Generics
function showData(arg) {
    return `Dado: ${typeof arg}`;
}
console.log(showData(4));
console.log(showData("Oi"));
//Constrains em generic
function showObject(obj) {
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
const myCar = {
    name: "Corola",
    cor: "Branco",
    wheels: 4,
};
const myComputer = {
    name: "Lenovo ideapad 3i",
    cor: "Prata",
    wheels: false,
};
console.log(myComputer, myCar);
//Type Parameters
function showUserID(user, key) {
    return `A chave do usuário é ${user[key]}`;
}
const user = {
    id: 2312312,
};
console.log(showUserID(user, "id"));
const myPerson = {
    name: "Charles",
    age: 30,
    passport: true,
};
function showKeys(persona, key) {
    return `Olá ${persona.name} seu "${key}" está como: ${persona[key]}`;
}
console.log(showKeys(myPerson, "passport"));
function showGoals(goals) {
    return `Total goals in this season: ${goals}`;
}
const p1 = {
    name: "Vini Jr",
    age: 23,
    club: "Real Madrid",
    goals: 28,
};
console.log(showGoals(p1.goals));
const myType = true; // É um boolean
const t = "One";
const t2 = "Day";
const t3 = "One";
