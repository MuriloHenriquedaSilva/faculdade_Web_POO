import { validate } from "bycontract";

class Funcionario{
    #nome;
    #salarioBase;

    constructor(nome,salarioBase){
        validate(arguments,['String','Number']);
        this.#nome = nome;
        this.#salarioBase = salarioBase;
    }

    get nome(){
        return this.#nome;
    }

    get salarioBase(){
        return this.#salarioBase;
    }

    get salarioLiquido(){
        let inss = this.salarioBase * 0.1;
        return this.salarioBase - inss;
    }

    toString(){
        return `Nome: ${this.nome}, SBase: R$ ${this.salarioBase.toFixed(2)}, SLiqdo: R$ ${this.salarioLiquido.toFixed(2)}`;
    }
}

class Tecnico extends Funcionario{
    #categoria;

    constructor(nome,salarioBase,categoria){
        validate(arguments,['String','Number','Number']);
        super(nome,salarioBase);
        this.#categoria = categoria;
    }

    get categoria(){
        return this.#categoria;
    }

    get salarioLiquido(){
        let sl = super.salarioLiquido;
        if (this.categoria > 3){
            sl = sl * 1.03;
        }
        return sl;
    }
}

class Professor extends Funcionario{
    #cargaHorariaMensal;

    constructor(nome,salarioBase,cargaHorariaMensal){
        validate(arguments,['String','Number','Number']);
        super(nome,salarioBase);
        this.#cargaHorariaMensal = cargaHorariaMensal;
    }

    get cargaHorariaMensal(){
        return this.#cargaHorariaMensal;
    }

    set cargaHorariaMensal(valor){
        validate(arguments,['Number']);
        this.#cargaHorariaMensal = (valor>0)?valor:0;
    }

    get salarioLiquido(){
        let valHora = this.salarioBase / 44;
        let sb = (valHora*this.cargaHorariaMensal);
        let inss = sb * 0.1;
        let sl = sb - inss;
        return sl;
    }
}

class Pesquisador extends Professor{
    #cargaHorariaPesquisa;

    constructor(dados){
        validate(arguments,[{"nome":"string","salarioBase":"number","cargaHorariaMensal":"Number","cargaHorariaPesquisa":"Number"}]);
        super(dados.nome,dados.salarioBase,dados.cargaHorariaMensal);
        this.#cargaHorariaPesquisa = dados.cargaHorariaPesquisa;
    }

    get cargaHorariaPesquisa(){
        return this.#cargaHorariaPesquisa;
    }

    set cargaHorariaPesquisa(valor){
        validate(arguments,['Number']);
        this.#cargaHorariaPesquisa = (valor>0)?valor:0;
    }

    // Implica na alteração do salário líquido
    get cargaHorariaMensal(){
        return super.cargaHorariaMensal + this.#cargaHorariaPesquisa;
    }
}


let p1 = {
    "nome":"Ze",
    "salarioBase":5000,
    "cargaHorariaMensal":30,
    "cargaHorariaPesquisa":10
};

let pesq = new Pesquisador(p1);
console.log(pesq.toString());