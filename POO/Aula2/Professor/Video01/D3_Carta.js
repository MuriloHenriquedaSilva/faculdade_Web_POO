import { validate } from 'bycontract';

class Carta{
    naipe;
    valor;
    faceParaCima;

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

    virada(){
        return !this.faceParaCima;
    }

    vira(){
        this.faceParaCima = !this.faceParaCima;
    }

    toString(){
        let str = `Valor: ${this.valor}, naipe: ${this.naipe},`;
        if (this.virada() == true){
            str += ' face para cima';
        }else{
            str += ' face para baixo';
        }
        return str;
    }
}

let c1 = new Carta();
c1.naipe = 'ouros';
c1.valor = '10';
console.log(c1.verificaNaipe(c1.naipe));
console.log(c1.verificaValor(c1.valor));
console.log(c1.toString());
