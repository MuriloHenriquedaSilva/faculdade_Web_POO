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

let cc = new ContaComum(1002);
cc.deposito(1000);
cc.retirada(500);
cc.retirada(1000);
console.log('Conta comum: '+cc.toString());

let cp = new ContaPoupanca(1012);
cp.deposito(1000);
cp.retirada(500);
cp.deposito(250);
cp.retirada(2000);
cp.computaJuros(0.1);
console.log('Conta poupanca: '+cp.toString());

let cl = new ContaLimite(1999,5000);
console.log('Conta Limite: '+cl.toString());
cl.retirada(720);
console.log('Conta Limite: '+cl.toString());
cl.deposito(1500);
console.log('Conta Limite: '+cl.toString());

