import { validate } from "bycontract";
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

class Carta {
    #naipe;
    #valor;
    #faceParaCima;

    constructor(naipe, valor) {
        validate(arguments, ['String', 'String']);
        if (!this.verificaNaipe(naipe) || !this.verificaValor(valor)) {
            this.#naipe = 'invalido';
            this.#valor = 'invalido';
            return;
        }
        this.#naipe = naipe;
        this.#valor = valor;
        this.#faceParaCima = true;
    }

    valores() {
        return ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    }

    naipes() {
        return ['ouros', 'paus', 'espadas', 'copas'];
    }

    toInt() {
        switch (this.#valor) {
            case 'A':
                return 14;
            case 'K':
                return 13;
            case 'Q':
                return 12;
            case 'J':
                return 11;
            default:
                return Number(this.#valor);
        }
    }

    verificaNaipe(naipe) {
        validate(arguments, ['String']);
        naipe = naipe.toLowerCase();
        return this.naipes().includes(naipe);
    }

    verificaValor(valor) {
        validate(arguments, ['String']);
        valor = valor.toLowerCase();
        return this.valores().includes(valor);
    }

    get naipe() {
        return this.#naipe;
    }

    set naipe(n) {
        if (!this.verificaNaipe(n)) {
            this.#naipe = 'invalido';
        } else {
            this.#naipe = n;
        }
    }

    get valor() {
        return this.#valor;
    }

    set valor(val) {
        if (!this.verificaValor(val)) {
            this.#valor = 'invalido';
        } else {
            this.#valor = val;
        }
    }

    toString() {
        if (this.naipe === 'invalido' || this.valor === 'invalido') {
            return 'Carta inválida';
        }
        return this.valor + ',' + this.naipe;
    }
}

class Baralho {
    #cartas;
    #topo;

    constructor() {
        this.#cartas = new Array(52);
        let aux = new Carta('ouros', 'A');
        let naipes = aux.naipes();
        let valores = aux.valores();
        let c = null;

        this.#topo = 0;
        for (let n = 0; n < naipes.length; n++) {
            for (let v = 0; v < valores.length; v++) {
                c = new Carta(naipes[n], valores[v]);
                this.#cartas[this.#topo] = c;
                this.#topo++;
            }
        }
    }

    embaralha() {
        for (let i = this.#topo - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.#cartas[i];
            this.#cartas[i] = this.#cartas[j];
            this.#cartas[j] = temp;
        }
    }

    toString() {
        let str = 'Quantidade de cartas: ' + this.#topo + '\n';
        for (let i = 0; i < this.#topo; i++) {
            str += this.#cartas[i].toString() + '\n';
        }
        return str;
    }

    pegaDecima() {
        if (this.#topo >= 10) {
            return this.#cartas[9]; // Assuming index 9 corresponds to the tenth card
        } else {
            return null; // Return null or handle the case when there are fewer than 10 cards
        }
    }
}

let b = new Baralho();
b.embaralha();
console.log(b.toString());
let c1 = b.pegaDecima();
console.log(c1);
