
import { validate } from "bycontract";
/* Enunciado
class ContaCorrente {
    #saldo;
    
    constructor(saldoInicial){
        validate(saldoInicial,"number");
        this.#saldo = saldoInicial;
    }

    deposito(valor){
        validate(valor,"number");
        this.#saldo += valor;
    }

    retirada(valor){
        validate(valor,"number");
        this.#saldo -= valor;
    }

    get saldo(){ 
        return(this.#saldo);   
    }
}
*/
class SaldoInsuficienteError extends Error{
    #saldoAtual;
    #retiradaDesejada;

    constructor(saldoAtual,retiradaDesejada){
        validate(arguments,["number","number"]);
        super("Saldo insuficiente!");
        this.#saldoAtual = saldoAtual;
        this.#retiradaDesejada = retiradaDesejada;
    }

    get saldoAtual(){
        return this.#saldoAtual;
    }

    get retiradaDesejada(){
        return this.#retiradaDesejada;
    }
}

class ContaCorrente {
    #saldo;
    
    constructor(saldoInicial){
        validate(saldoInicial,"number");
        if (saldoInicial < 0) throw new Error('Saldo inicial invalido!');
        this.#saldo = saldoInicial;
    }

    deposito(valor){
        validate(valor,"number");
        if (valor < 0) throw new Error('Valor de deposito invalido!');
        this.#saldo += valor;
    }

    retirada(valor){
        validate(valor,"number");
        if (valor < 0) throw new Error('Valor de retirada invalido!');
        if (this.saldo - valor < 0){
            throw new SaldoInsuficienteError(this.saldo,valor);
        }
        this.#saldo -= valor;
    }

    get saldo(){ 
        return(this.#saldo);   
    }
}


let cc = new ContaCorrente(1000);
cc.deposito(500);
cc.retirada(2000);