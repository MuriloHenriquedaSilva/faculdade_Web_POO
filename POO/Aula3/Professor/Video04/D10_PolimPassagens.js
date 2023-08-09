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

globalThis.Passagem = Passagem;

function qtdadeMalas(passagens){
    validate(passagens,"Array.<Passagem>");
    let cont = 0;
    for(let p of passagens){
        cont += p.qtdadeMalas();
    }
    return cont;
}

function qtdadeVIP(passagens){
    validate(passagens,"Array.<Passagem>");
    let cont = 0;
    for(let p of passagens){
        if (p.acessoPrioritario() == true){
            cont++;
        }
    }
    return cont;
}

let passagens = [];
passagens.push(new Economica('10/03/2023',1010,500));
passagens.push(new Executiva('10/03/2023',1010,500));
passagens.push(new PrimeiraClasse('10/03/2023',1010,500));
passagens.push(new Economica('10/03/2023',1010,500));
passagens.push(new Executiva('10/03/2023',1010,500));
passagens.push(new PrimeiraClasse('10/03/2023',1010,500));

console.log('Malas: '+qtdadeMalas(passagens));
console.log('VIPs: '+qtdadeVIP(passagens));