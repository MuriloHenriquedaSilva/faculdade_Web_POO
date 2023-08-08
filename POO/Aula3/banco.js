import { validate } from "bycontract";
import promptsync from 'prompt-sync';

class ContaComum {
    #numero;
    #saldo;

    constructor(numero) {
        validate(arguments, ['Number']);
        this.#numero = numero;
        this.#saldo = 0;
    }

    get numero() {
        return this.#numero;
    }

    get saldo() {
        return this.#saldo;
    }

    deposito(valor) {
        if (valor < 0) {
            return false;
        }
        this.#saldo += valor;
        return true;
    }

    retirada(valor) {
        if (valor < 0 || this.#saldo - valor < 0) {
            return false;
        }
        this.#saldo -= valor;
        return true;
    }

    toString() {
        return `Numero: ${this.numero}, saldo: ${this.saldo.toFixed(2)}`;
    }
}

class ContaPoupanca extends ContaComum {
    constructor(numero) {
        super(numero);
    }

    computaJuros(taxa) {
        if (taxa < 0.0 || taxa > 1.0) {
            return false;
        }
        let juros = this.saldo * taxa;
        this.deposito(juros);
        return true; // Explicitly return true to indicate success
    }
}

class ContaLimite extends ContaComum {
    #limite;

    constructor(numero, limite) {
        validate(arguments, ['Number', 'Number']); // Fixed argument validation
        super(numero);
        this.#limite = limite;
        this.deposito(limite);
    }

    get limite() {
        return this.#limite;
    }

    get saldo() {
        let s = super.saldo;
        s -= this.#limite;
        return s;
    }
}

const prompt = promptsync();

function main() {
    let cp = new ContaPoupanca(102);
    console.log(cp.toString());
    
    cp.deposito(3000);
    cp.computaJuros(0.1);
    cp.retirada(100);
    console.log(cp.toString());
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

    let c1 = new ContaLimite(200, 1000);
    console.log(c1.toString());
    c1.retirada(200);
    console.log(c1.toString());
}

main();
