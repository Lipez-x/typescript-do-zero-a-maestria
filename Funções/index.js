"use strict";
//Sem retorno
function semRetorno() {
    console.log("Uma função void!");
}
semRetorno();
//Callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Aguarde...");
    const greet = f(userName);
    setTimeout(() => {
        console.log(greet);
    }, 2000);
}
preGreeting(greeting, "Felipe");
//Generic Function
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObj = mergeObjects({ name: "Felipe" }, { age: 18, height: 1.7 });
console.log(newObj);
//Constrains
function biggestNumber(n1, n2) {
    let biggest;
    if (+n1 > +n2) {
        biggest = n1;
    }
    else {
        biggest = n2;
    }
    return biggest;
}
console.log(biggestNumber("12", "11"));
console.log(biggestNumber(12, 21));
console.log(biggestNumber(12, "31"));
//Parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name} como vai?`;
    }
    else {
        return `Olá ${name}`;
    }
}
console.log(modernGreeting("Felipe", "Dr."));
//Parâmetro default
function soma(a = 0, b) {
    return a + b;
}
console.log(soma(10, 2312));
//Unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[1]);
    }
    else if (typeof x === "number") {
        console.log("X é um número meu rei");
    }
}
doSomething([1, 2, 3]);
doSomething(1);
//Never
function showError(msg) {
    throw new Error(msg);
}
// showError("Erro no servidor");
// Rest Operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(197654, 234, 343, 4347));
// Destructuring
function showProductDetails({ name, price, }) {
    return `O Produto "${name}" custa R$${price}`;
}
const product = {
    name: "Notebook",
    price: "2200,00",
};
console.log(showProductDetails(product));
