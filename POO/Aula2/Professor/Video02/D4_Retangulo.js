import { validate } from "bycontract";

class Retangulo{
    #lado1
    #lado2

    constructor(lado1,lado2){
        validate(arguments,["Number","Number"]);
        if (lado1 < 0.0 || lado2 < 0.0){
            lado1 = -1.0;
            lado2 = -1.0;
            return;
        }
        this.#lado1 = lado1;
        this.#lado2 = lado2;
    }

    get lado1(){
        return this.#lado1;
    }

    set lado1(valor){
        if (valor <= 0){
            this.#lado1 = -1.0;
        }else{
            this.#lado1 = valor;
        }
    }

    get lado2(){
        return this.#lado2;
    }

    set lado2(valor){
        if (valor <= 0){
            this.#lado1 = -1.0;
        }else{
            this.#lado2 = valor;
        }
    }

    perimetro(){
        if (this.#lado1 === -1.0){
            return NaN;
        }
        return 2*this.#lado1 + 2*this.#lado2;
    }

    area(){
        if (this.#lado1 === -1.0){
            return NaN;
        }
        return this.#lado1 * this.#lado2;
    }

    toString(){
        if (this.#lado1 === -1.0){
            return 'Retangulo invalido';
        }
        let str = 'Retangulo:\n';
        str += `  Lado1: ${this.#lado1}, Lado2: ${this.#lado2}\n`;
        str += `  Area: ${this.area()}, Perimetro: ${this.perimetro()}`;
        return str;
    }
}


let r1 = new Retangulo(10,10);
console.log(r1.toString());
console.log("");
r1.lado2 = -25;
console.log(r1.toString());
