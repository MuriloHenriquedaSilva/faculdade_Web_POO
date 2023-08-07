import { validate } from "bycontract";
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

class Carta{
    #naipe;
    #valor
    #faceParaCima

    constructor(naipe,valor){
        validate(arguments,['String','String']);
        if(!this.verificaNaipe(naipe) || !this.verificaValor(valor)){
            this.#naipe = 'invalido';
            this.#valor = 'invalido';
            return;
        }
        this.#naipe = naipe;
        this.#valor = valor;
        this.#faceParaCima = true;
    }
    valores(){
        return ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K']
    }
    naipes(){
        return ['ouros','paus','espadas','copas']
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
                return Number(this.#valor)

        }

    }
    verificaNaipe(naipe){
        validate(arguments,['String']);
        naipe = naipe.toLowerCase();
        return this.naipes().includes(naipe)
    }
    verificaValor(valor){
        validate(arguments,['String']);
        valor = valor.toLowerCase();
        return this.naipes().includes(valor)
    }
    get naipe(){
        return this.#naipe;
    }

    set naipe(n){
        if(!this.verificaNaipe(n)){
            this.#naipe = 'invalido'
        }else{
            this.naipe = n;
        }
    }
    get valor(){
        return this.#valor;
    }
    set valor(val){
         if(!this.verificaNaipe(n)){
            this.#valor = 'invalido'
        }else{
            this.valor = val;
        }
    }

    virada(){
        return !this.#faceParaCima;
    }
    vira(){
        this.#faceParaCima = !this.#faceParaCima
    }

    toString(){
        if(this.naipe === 'invalido' || this.valor === 'invalido'){
            return 'Carta inválida'
        }
        let str = this.valor + ',' + this.naipe;
        return str;
    }

    
}
class Baralho {
    #cartas;
    #topo;
    constructor(){
        this.#cartas = new Array(52);
        let aux = new Carta ('ouros','A')
        let naipes = aux.naipes();
        let valores = aux.valores();
        let c = null;

        this.#topo = 0;
        for(let n=0; n<naipes.length;n++){
            for(let v=0;valores.length;v++){
                c = new Carta(naipes[n],valores[v]);
                this.#cartas[this.#topo] = c;
                this.#topo++;
            }
        }
    }
    toString(){
        let str = 'Quantidade de cartas'+this.#topo;
        for (let i=0;i<this.#topo;i++){
            str = str + this.#cartas[i].toString();
        }
        return str + '\n';
    }
}

let b = new Baralho();
console.log(b.toString());