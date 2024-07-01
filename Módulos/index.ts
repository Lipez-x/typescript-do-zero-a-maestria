//Importação de variável e Alias
import { User, ClientFromUser as Client } from "./user";

const uOne = new User("Felipe", "felps124");
const cOne = new Client("Antonio Felipe", 18, "felps", "felp123");

console.log(uOne);
console.log(cOne.showDetails());

//Importação de arquivo
import helloWorld from "./user";

console.log(helloWorld());

//Importando todos
import * as DefaultNumbers from "./defaultNumbers";
console.log(DefaultNumbers.n4);
