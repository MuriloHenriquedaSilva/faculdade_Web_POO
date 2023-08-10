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

class Turma{
    #numero;
    #professor;
    #alunos
    #qtdadeAlunos;

    constructor(nroTurma,nomeProfessor,vagas){
        validate(arguments,["Number","String","Number"]);
        if (nroTurma<=0 || nomeProfessor.length == 0 || vagas <=0){
            this.#numero = -1;
        }
        this.#numero = nroTurma;
        this.#professor = nomeProfessor;
        this.#alunos = new Array(vagas);
        this.#qtdadeAlunos = 0;
    }

    get numero(){
        return this.#numero;
    }

    get professor(){
        return this.#professor;
    }

    get qtdadeAlunos(){
        return this.#qtdadeAlunos;
    }

    consultaAluno(matricula){
        validate(arguments,["Number"]);
        for(let i=0;i<this.#qtdadeAlunos;i++){
            if (this.#alunos[i].matricula === matricula){
               return this.#alunos[i]; 
            }
        }
        return null;
    }

    matricular(aluno){
        validate(arguments,[Aluno]);
        this.#alunos[this.#qtdadeAlunos] = aluno;
        this.#qtdadeAlunos++;
    }

    informaNota(matricula,nroNota,nota){
        validate(arguments,["Number","Number","Number"]);
        if (nota < 0.0 || nota > 10.0){
            return false;
        }
        if (nroNota != 1 && nroNota != 2){
            return false;
        }
        for(let i=0;i<this.#qtdadeAlunos;i++){
            if (this.#alunos[i].matricula == matricula){
                if (nroNota == 1){
                    this.#alunos[i].notaP1 = nota;
                    return true;
                }else if (nroNota == 2){
                    this.#alunos[i].notaP2 = nota;
                    return true;
                }else{
                    return false;
                }
            }
        }
        return false;
    }

    aprovados(){
        let resp = [];
        for(let i=0;i<this.#qtdadeAlunos;i++){
            if (this.#alunos[i].aprovado()){
                resp.push(this.#alunos[i].nome);
            }
        }
        return resp;
    }

    reprovados(){
        let resp = [];
        for(let i=0;i<this.#qtdadeAlunos;i++){
            if (!this.#alunos[i].aprovado()){
                resp.push(this.#alunos[i].nome);
            }
        }
        return resp;
    }
}

let poo = new Turma(10,'Bernardo Copstein',20);

let a1 = new Aluno(1025,'Jose Dias');
poo.matricular(a1);
poo.matricular(new Aluno(1026,'Aline Cantier'));
poo.matricular(new Aluno(1027,'Berenice Silva'));

poo.informaNota(1025,1,8);
poo.informaNota(1027,1,6);
poo.informaNota(1027,2,6);
poo.informaNota(1026,1,9);
poo.informaNota(1026,2,9);
poo.informaNota(1025,2,7);

//console.log(poo.consultaAluno(1026).toString());
console.log(`Aprovados: ${poo.aprovados()}`);
console.log(`Reprovados: ${poo.reprovados()}`);