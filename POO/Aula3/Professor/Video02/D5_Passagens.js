import { validate } from "bycontract";

class Passagem{
    #data
    #nroVoo
    #custoBase

    constructor(data,nroVoo,custoBase){
        validate(arguments,["string","number","number"]);
        this.#data = data;
        this.#custoBase = custoBase;
        this.#nroVoo = nroVoo;
    }

    get data(){
        return this.#data;
    }

    get nroVoo(){
        return this.#nroVoo;
    }

    get custoBase(){
        return this.#custoBase;
    }

    totalPagar(){
        return undefined;
    }

    qtdadeMalas(){
        return 0;
    }

    acessoPrioritario(){
        return false;
    }

    toString(){
        let str =  `Data: ${this.data}, Voo: ${this.#nroVoo}, valor: R$ ${this.totalPagar()}`;
        str += `, malas: ${this.qtdadeMalas()}, acesso prioritario: ${this.acessoPrioritario()?'Sim':'Não'}`;
        return str;
    }
}

class Economica extends Passagem{
    constructor(data,nroVoo,custoBase){
        super(data,nroVoo,custoBase);
    }

    totalPagar(){
        let operacional = this.custoBase * 0.1;
        return this.custoBase + operacional;
    }
}

class Executiva extends Passagem{
    constructor(data,nroVoo,custoBase){
        super(data,nroVoo,custoBase);
    }

    totalPagar(){
        let operacional = this.custoBase * 0.3;
        return this.custoBase + operacional;
    }

    qtdadeMalas(){
        return 1;
    }
}

class PrimeiraClasse extends Executiva{
    constructor(data,nroVoo,custoBase){
        super(data,nroVoo,custoBase);
    }

    totalPagar(){
        let extra = super.totalPagar() * 0.5;
        return super.totalPagar() + extra;
    }

    qtdadeMalas(){
        return 3;
    }

    acessoPrioritario(){
        return true;
    }
}

let ec = new Economica('10/03/023',1010,500);
let ex = new Executiva('10/03/2023',1010,500);
let pc = new PrimeiraClasse('10/03/2023',1010,500);

console.log(ec.toString());
console.log(ex.toString());
console.log(pc.toString());
