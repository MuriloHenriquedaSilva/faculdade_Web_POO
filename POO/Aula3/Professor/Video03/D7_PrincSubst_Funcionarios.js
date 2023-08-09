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

    constructor(nome,salarioBase,cargaHorariaMensal,cargaHorariaPesquisa){
        validate(arguments,['String','Number','Number','Number']);
        super(nome,salarioBase,cargaHorariaMensal);
        this.#cargaHorariaPesquisa = cargaHorariaPesquisa;
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

function acrescentaHoras(funcionario){
    validate(funcionario,Funcionario);
    if (funcionario instanceof Pesquisador){
        funcionario.cargaHorariaPesquisa += 3;
    }else{
        if (funcionario instanceof Professor){
            funcionario.cargaHorariaMensal += 5;
        }
    }
}



let t = new Tecnico('Zezinho',5000,4);
console.log('Tecnico: '+t.toString());
acrescentaHoras(t);
console.log('Tecnico: '+t.toString());

let p = new Professor('Luizinho',10000,20);
console.log('Professor: '+p.toString());
acrescentaHoras(p);
console.log('Professor: '+p.toString());

let pp = new Pesquisador('Lala',20000,20,10);
console.log('Pesquisador: '+pp.toString());
acrescentaHoras(pp);
console.log('Pesquisador: '+pp.toString());


