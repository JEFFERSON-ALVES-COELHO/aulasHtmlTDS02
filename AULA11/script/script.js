console.log("Hello, World!");

const nome = "João"; // Recebeu um valor não pode ser alterado
let idade = 30; // Pode ser alterado
var sobrenome = "Silva"; // Escopo global

//function multiplicar(x, y){ //função tradicional

//    return x * y;

//}

//Arrow function
const multiplicar = (x, y) => {
    console.log(x * y);
    return `O resultado da multiplicação é: ${x*y}`;
}

const raizQuadrada = (x) => {
    return Math.sqrt(x);
}

const subtrair = (x, y) => x - y; //função de uma linha

const potencia = (x, y) => (x^y); //função de uma linha

const dividir = (x, y) => {
    if (y != 0) {
        return "Não é possível dividir por zero!";
    }
}


