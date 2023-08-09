import { validate } from "bycontract";

class ContaComum{
    #numero;
    #saldo;

    constructor(numero){
        validate(arguments,['Number']);
        this.#numero = numero;
        this.#saldo = 0;
    }

    get numero(){
        return this.#numero;
    }

    get saldo(){
        return this.#saldo;
    }

    deposito(valor){
        validate(arguments,['Number']);
        if (valor < 0){
            return false;
        }
        this.#saldo += valor;
        return true;
    }

    retirada(valor){
        validate(arguments,['Number']);
        if (valor < 0){
            return false;
        }
        if (this.#saldo-valor < 0){
            return false;
        }
        this.#saldo = this.#saldo - valor; 
        return true;
    }

    // Observe que será acionada a propriedade saldo sobrescrita
    toString(){
        return `Numero: ${this.#numero}, saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

class ContaPoupanca extends ContaComum{
    constructor(numero){
        validate(arguments,['Number']);
        super(numero);
    }

    computaJuros(taxa){
        validate(arguments,['Number']);
        if (taxa <= 0.0 || taxa > 1.0){
            return false;
        }
        let juros = this.saldo * taxa;
        this.deposito(juros);
    }
}

class ContaLimite extends ContaComum{
    #limite;

    constructor(numero,limite){
        validate(arguments,['Number','Number']);
        super(numero);
        this.#limite = limite; // depositamos o limite para poder aproveitar o funcionamento de ContaComum
        this.deposito(limite);
    }

    get limite(){
        return this.#limite;
    }

    // Sobrescrevemos a propriedade saldo de maneira que
    // o limite seja descontado para efeitos de consulta
    get saldo(){
        let s = super.saldo;
        s = s - this.#limite;
        return s;
    }
}

function impConta(conta){
    validate(conta,ContaComum);
    let str = `Conta: ${conta.numero}`;
    str += `, Saldo: R$ ${conta.saldo}`;
    if (conta instanceof ContaLimite){
        str += `, Limite: R$ ${conta.limite}`;
    }
    console.log(str);
}


let c1 = new ContaPoupanca(202);
c1.deposito(2300);
impConta(c1);

let c2 = new ContaLimite(404,5000);
c2.deposito(1300);
c2.retirada(2000);
impConta(c2);

