import { validate } from "bycontract";
import promptsync from 'prompt-sync';
const prompt = promptsync({ sigint: true });

class Retangulo {
    #lado1
    #lado2

    constructor(lado1, lado2) {
        validate(arguments, ["Number", "Number"]);
        if (lado1 < 0.0 || lado2 < 0.0) {
            lado1 = -1.0;
            lado2 = -1.0;
            return;
        }
        this.#lado1 = lado1;
        this.#lado2 = lado2;
    }

    get lado1() { return this.#lado1; }

    get lado2() { return this.#lado2; }

    perimetro() {
        if (this.#lado1 === -1.0) { return NaN; }
        return 2 * this.#lado1 + 2 * this.#lado2;
    }

    area() {
        if (this.#lado1 === -1.0) { return NaN; }
        return this.#lado1 * this.#lado2;
    }
}


function fatorial(valor) {
    validate(valor, "number");
    if (x < 0) {
        throw new Error('Valor invalido');
    }
    let fact = 0;
    for (fact = 1; valor > 1; valor--) {
        fact = fact * valor;
    }
    return (fact);
}

class valorInvalidoError extends Error{
    constructor(valor){
        super(`Valor invalido:${valor}`);
    }
}


let x = Number(prompt('Digite um valor: '));
let y = 0;
try {
    y = 5 * fatorial(x);
    console.log(y);
} catch (erro) {
    console.log(erro.message);
    process.exit(1);
}
console.log('Fim');

/*
function teste(valor){
    try{
        if (valor === 0){
            throw new Error('Valor 0');
        }
        return 10/valor;
    }catch(erro){
        return 0;
    }finally{
        console.log("Sempre passa por aqui");
    }
}



let z = Number(prompt('Digite um valor: '));
if (z < 0) throw new valorInvalidoError(z);
let w = 5 * fatorial(z);
console.log(w);
console.log('Fim');
*/