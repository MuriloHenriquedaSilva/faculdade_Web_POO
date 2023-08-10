import { validate } from "bycontract";

class Retangulo{
    lado1
    lado2

    perimetro(){
        return 2*this.lado1 + 2*this.lado2;
    }

    area(){
        return this.lado1 * this.lado2;
    }

    toString(){
        let str = 'Retangulo:\n';
        str += `  Lado1: ${this.lado1}, Lado2: ${this.lado2}\n`;
        str += `  Area: ${this.area()}, Perimetro: ${this.perimetro()}`;
        return str;
    }
}


let r1 = new Retangulo();
r1.lado1 = 10;
r1.lado2 = 20;
console.log(r1.toString());
