import { validate } from "bycontract";

class Coelho{
    #raca
    #peso
    static qtdade = 0;

    constructor(raca,peso){
        validate(arguments,["String","Number"]);
        this.#raca = raca;
        this.#peso = peso;
        Coelho.qtdade++;
    }

    get raca(){
        return this.#raca;
    }

    get peso(){
        return this.#peso;
    }

    static quantidadeCoelhos(){
        return Coelho.qtdade;
    }
}

let c1 = new Coelho('Malhado',20);
let c2 = new Coelho('Branco',25);
let c3 = new Coelho('Lebre',18);

console.log(Coelho.quantidadeCoelhos());