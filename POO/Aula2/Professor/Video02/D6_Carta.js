import { validate } from 'bycontract';

class Carta{
    #naipe;
    #valor;
    #faceParaCima;

    constructor(naipe,valor){
        validate(arguments,["String","String"]);
        if (!this.verificaNaipe(naipe) ||
            !this.verificaValor(valor)){
            this.#naipe = 'invalido';
            this.#valor = 'invalido';
            return;
        }
        this.#naipe = naipe;
        this.#valor = valor;
        this.#faceParaCima = true;
    }

    verificaNaipe(naipe){
        validate(arguments,["String"]);
        naipe = naipe.toLowerCase();
        switch(naipe){
            case 'ouros':
            case 'copas':
            case 'paus':
            case 'espadas':
                return true;
            default:
                return false;
        }
    }

    verificaValor(valor){
        validate(arguments,["String"]);
        valor = valor.toUpperCase();
        let valores = ['A','1','2',
                       '3','4','5',
                       '6','7','8',
                       '9','10','J',
                       'Q','K'];
        return(valores.includes(valor));
    }

    get naipe(){
        return this.#naipe;
    }

    set naipe(n){
        if (!this.verificaNaipe(n)){
            this.#naipe = 'invalido';
        }else{
            this.#naipe = n;
        }
    }

    get valor(){
        return this.#valor;
    }

    set valor(val){
        if (!this.verificaValor(val)){
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

let c1 = new Carta('Ouros','10');
let c2 = new Carta('Faus','5');
c2.naipe = 'espadas';
c2.valor = 'A';
console.log(c1.toString());
console.log(c2.toString());
c2.valor = '15';
console.log(c2.toString());
