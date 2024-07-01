let n: number;
let word: string;
let bool: boolean;

n = 10.2314232;
word = "Felipe";
bool = true;

console.log(n.toPrecision(3));
console.log(word.toLocaleUpperCase());
console.log(bool);

//Inference e Annotation

let ann: string = "Felipe"; //String
let inf = "Lipe"; //String

var number: number = 10;

var numberString = number.toString();

console.log(`Número convetido em string: ${numberString}`);
