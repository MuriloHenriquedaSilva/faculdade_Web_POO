import { validate } from "bycontract";

class Aluno{
    #matricula
    #nome 
    #notaP1
    #notaP2

    constructor(matricula,nome){
        validate(arguments,["Number","String"]);
        if (matricula<1000 || matricula>9999){
            this.#matricula = NaN;
        }
        if (nome.length == 0){
            this.#nome = 'none';
        }
        this.#matricula = matricula;
        this.#nome = nome;
        this.#notaP1 = -1.0;
        this.#notaP2 = -1.0;
    }

    get matricula(){
        return this.#matricula;
    }

    get nome(){
        return this.#nome;
    }

    get notaP1(){
        return this.#notaP1;
    }

    set notaP1(valor){
        if (valor >=0.0 && valor <=10.0){
            this.#notaP1 = valor;
        }else{
            this.#notaP1 = -1.0;
        }
    }

    get notaP2(){
        return this.#notaP2;
    }

    set notaP2(valor){
        if (valor >=0.0 && valor <=10.0){
            this.#notaP2 = valor;
        }else{
            this.#notaP2 = -1.0;
        }
    }

    media(){
        if (this.#notaP1 === -1.0 || this.#notaP1 === -1.0){
            return NaN;
        }else{
            return (this.#notaP1+this.#notaP2)/2;
        }
    }

    aprovado(){
        return this.media() >= 7.0;
    }

    toString(){
        let str = '';
        if (this.#matricula === NaN ||
            this.#nome === 'none'){
                str = 'Dados invalidos';
        }else{
            str = `Matricula: ${this.#matricula}, Nome: ${this.#nome}\n`;
            if (this.#notaP1 === -1.0 || this.#notaP2 === -1.0){
                str += ' Notas não disponiveis';
            }else{
                str += `  Prova1: ${this.#notaP1}, Prova2: ${this.#notaP2}\n`;
                str += `  Media: ${this.media()}, Situacao: `;
                if (this.aprovado()){
                    str += 'aprovado';
                }else{
                    str += 'reprovado';
                };
            }
        }
        return str;
    }
}


let a1 = new Aluno(1025,'Jose Dias');
a1.notaP1 = 8.5;
a1.notaP2 = 6.0;
console.log(a1.toString());
a1.notaP1 = 15;
console.log(a1.toString());

