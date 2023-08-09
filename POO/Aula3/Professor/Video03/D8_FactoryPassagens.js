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

    toString(){
        return 'Economica: '+super.toString();
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

    toString(){
        return 'Executiva: '+super.toString();
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

    toString(){
        return 'Primeira classe: '+super.toString();
    }
}

function criaPassagem(data,nroVoo,custoBase,vip,malas){
    validate(arguments,["string","number","number","boolean","boolean"]);
    let passagem = undefined;
    if (vip === false && malas == false){
        passagem = new Economica(data,nroVoo,custoBase);
        return passagem;
    }

    if (vip === false && malas === true){
        passagem = new Executiva(data,nroVoo,custoBase);
        return passagem;
    }

    if (vip === true && malas === true){
        passagem = new PrimeiraClasse(data,nroVoo,custoBase);
        return passagem;
    }
    return passagem;
}

let p1 = criaPassagem('10/03/023',1010,500,false,false);
if (p1 != undefined){
    console.log(p1.toString());
}

let p2 = criaPassagem('10/03/2023',1010,500,false,true);
if (p2 != undefined){
    console.log(p2.toString());
}

let p3 = criaPassagem('10/03/2023',1010,500,true,true);
if (p3 != undefined){
    console.log(p3.toString());
}

let p4 = criaPassagem('10/03/2023',1010,500,true,false);
if (p4 != undefined){
    console.log(p4.toString());
}