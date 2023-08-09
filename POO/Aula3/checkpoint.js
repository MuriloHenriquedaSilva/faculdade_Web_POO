import { validate } from "bycontract";
class Economical {
    constructor(data, nroVoo, custoBase) {
        this.#data = data;
        this.#nroVoo = nroVoo;
        this.#custoBase = custoBase;
    }

    get data() {
        return this.#data;
    }

    get nroVoo() {
        return this.#nroVoo;
    }

    qtdadeMalas() {
        return 1;
    }

    get custoBase() {
        return this.#custoBase;
    }

    totalPagar() {
        return this.custoBase;
    }

    acessoPrioritario() {
        return false;
    }

    toString() {
        let str = `${this.data}, ${this.nroVoo}, R$ ${this.totalPagar()}, ${this.qtdadeMalas()}, ${this.acessoPrioritario()}`;
        return str;
    }
}

class Executiva extends Economical {
    constructor(data, nroVoo, custoBase) {
        super(data, nroVoo, custoBase);
    }

    totalPagar() {
        return this.custoBase * 1.1;
    }

    qtdadeMalas() {
        return 2;
    }
}

function impPassagens(passagens) {
    validate(passagens, "Array.<Economica>");
    for (let p of passagens) {
        console.log(p.toString());
    }
}
