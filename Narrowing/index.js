"use strict";
function soma(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        let somaString = parseFloat(a) + parseFloat(b);
        console.log(somaString);
    }
    else if (typeof a === "number" && typeof b === "number") {
        let somaNumber = a + b;
        console.log(somaNumber);
    }
    else {
        console.log("Dados inválidos");
    }
}
soma("10", "20");
soma(10, 12);
soma("12", 13);
//instaceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const felipe = new SuperUser("Felipe");
const jhon = new User("Jhon");
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá mestre ${user.name}`);
    }
    else if (user instanceof User) {
        console.log(`Olá mundado ${user.name}`);
    }
}
userGreeting(felipe);
userGreeting(jhon);
// Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const menino = new Dog("Menino");
const rush = new Dog("Rush", "Golden Retriever");
function showDetailsDog(dog) {
    if ("breed" in dog) {
        console.log(`O cachorro "${dog.name}" é da raça ${dog.breed}`);
    }
    else {
        console.log(`O cachorro "${dog.name}" é um SRD`);
    }
}
showDetailsDog(menino);
showDetailsDog(rush);
function checkReview(review) {
    console.log(typeof review);
    if (!review) {
        console.log("O usuário não deixou um review.");
    }
    else if (review >= 1 && review <= 5) {
        console.log(`A avaliação do usuário foi de ${review} estrelas`);
    }
    else {
        console.log("Avaliação inválida");
    }
}
checkReview(3);
