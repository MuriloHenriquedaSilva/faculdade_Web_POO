import { validate } from "bycontract";

class Carta{
    #naipe;
    #valor;
    #faceParaCima;

    constructor(naipe,valor){
        validate(arguments,["String","String"]);
        if (!Carta.verificaNaipe(naipe) ||
            !Carta.verificaValor(valor)){
            this.#naipe = 'invalido';
            this.#valor = 'invalido';
            return;
        }
        this.#naipe = naipe;
        this.#valor = valor;
        this.#faceParaCima = true;
    }

    static valores(){
        return ['A','1','2','3','4','5',
                '6','7','8','9','10','J','Q','K'];
    }

    static naipes(){
        return ['ouros','paus','espadas','copas'];
    }

    toInt(){
        switch(this.#valor){
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

    static verificaNaipe(naipe){
        validate(arguments,["String"]);
        naipe = naipe.toLowerCase();
        return Carta.naipes().includes(naipe);
    }

    static verificaValor(valor){
        validate(arguments,["String"]);
        valor = valor.toUpperCase();
        return(Carta.valores().includes(valor));
    }

    get naipe(){
        return this.#naipe;
    }

    set naipe(n){
        if (!Carta.verificaNaipe(n)){
            this.#naipe = 'invalido';
        }else{
            this.#naipe = n;
        }
    }

    get valor(){
        return this.#valor;
    }

    set valor(val){
        if (!Carta.verificaValor(val)){
            this.#valor = 'invalido';
        }else{
            this.#valor = val;
        }
    }

    virada(){
        return !this.#faceParaCima;
    }

    vira(){
        this.#faceParaCima = !this.#faceParaCima;
    }

    toString(){
        if (this.#naipe === 'invalido'||this.#valor==='invalido'){
            return "Carta invalida";
        }
        let str = `${this.#valor}, ${this.#naipe}`;
        return str;
    }
}

let c = new Carta('Copas','3');
console.log(c.toString());