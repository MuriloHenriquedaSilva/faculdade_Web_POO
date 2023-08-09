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

globalThis.ContaComum = ContaComum;

function impNrosSaldos(contas){
    validate(arguments,["Array.<ContaComum>"]);
    for(let conta of contas){
        console.log(`Numero: ${conta.numero}, Saldo: R$ ${conta.saldo.toFixed(2)}`);
    }
}

function creditaJuros(contas,taxa){
    validate(arguments,["Array.<ContaComum>","Number"]);
    for(let conta of contas){
        if (conta instanceof ContaPoupanca)
            conta.computaJuros(taxa);
    }
}

function depositoInicial(contas,valor){
    validate(arguments,["Array.<ContaComum>","Number"]);
    for(let conta of contas){
        conta.deposito(valor);
    }
}



let agencia = new Array();

agencia.push(new ContaComum(100));
agencia.push(new ContaPoupanca(110));
agencia.push(new ContaLimite(120,2000));
agencia.push(new ContaComum(111));
agencia.push(new ContaLimite(109,5000));
agencia.push(new ContaLimite(145,3000));

depositoInicial(agencia,1000);
creditaJuros(agencia,0.015);
agencia[4].deposito(200);
agencia[5].retirada(1500);
impNrosSaldos(agencia);