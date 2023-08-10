import { typedef, validate } from "bycontract";

// Interface transportavel
typedef("#Transportavel",
        {
            fragil:'boolean',
            valorFrete:'number',
        });

function isTransportavel(obj){
    return ('fragil' in obj &&
           'valorFrete' in obj);
}

// Interface taxável
typedef("#Taxavel",
    {
        valorImposto:"number",
    });

function isTaxavel(obj){
    return ('valorImposto' in obj);
}

// Hierarquia de classes
class Entregavel{
    #id;
    #descricao;

    constructor(id,descricao){
        validate(arguments,["Number","string"]);
        this.#id = id;
        this.#descricao = descricao;
    }

    get id(){
        return this.#id;
    }

    get descricao(){
        return this.#descricao;
    }
}

// Produto é derivado de Coisa e implementa transportavel e taxavel
class Produto extends Entregavel{
    #preco;
    static #gerId = 1;

    constructor(descricao,preco){
        validate(arguments,["string","Number"]);
        super(Produto.#gerId++,descricao);
        this.#preco = preco;
    }

    get preco(){
        return this.#preco;
    }

    // Implementa taxavel
    get valorImposto(){
        return(this.preco *0.15);
    }

    // Implementa transportavel
    get fragil(){
        return false;
    }

    get valorFrete(){
        if (this.cep === "90000"){
            return this.#preco * 0.005;
        }
        return this.#preco *0.01;
    }
}

class Servico extends Entregavel{
    #valorHora;

    constructor(id,descricao,valorHora){
        validate(arguments,['number','string','number']);
        super(id,descricao);
        this.#valorHora = valorHora
    }

    get valorHora(){
        return this.#valorHora;
    }

    // Implementa taxavel
    get valorImposto(){
        return this.valorHora*0.05;
    }
}

class ServicoVoluntario extends Entregavel{
    #nomeVoluntario;

    constructor(id,descricao,nomeVol){
        validate(arguments,["number","string","string"]);
        super(id,descricao);
        this.#nomeVoluntario = nomeVol;
    }

    get nomeVoluntario(){
        return this.#nomeVoluntario;
    }
}

class Veiculo{
    #placa;
    #ano;
    #valor;

    constructor(placa,ano,valor){
        validate(arguments,["string","number","number"]);
        this.#placa = placa;
        this.#ano = ano;
        this.#valor = valor;
    }

    get placa(){
        return this.#placa;
    }

    get ano(){
        return this.#ano;
    }

    get valor(){
        return this.#valor;
    }

    // implementa taxavel
    get valorImposto(){
        return this.#valor * 0.03;
    }
}

globalThis.Produto = Produto;
globalThis.Entregavel = Entregavel;

function exibeFrete(entregavel){
    validate(entregavel,"#Transportavel");
    console.log(`Descricao: ${entregavel.descricao}, Valor frete: ${entregavel.valorFrete.toFixed(2)}`);
}

function exibeValorImposto(entregavel){
    validate(entregavel,'#Taxavel');
    console.log(`Descricao: ${entregavel.descricao}, Valor imposto: ${entregavel.valorImposto.toFixed(2)}`);    
}

function listaEntregaveis(entregaveis){
    validate(entregaveis,"Array.<Entregavel>");
    for(let e of entregaveis){
        console.log(`Id: ${e.id}, descricao: ${e.descricao}`);
    }
}

function listaTaxaveis(taxaveis){
    validate(taxaveis,"Array.<Entregavel>");
    validate(taxaveis,"Array.<#Taxavel>");
    for(let t of taxaveis){
        let aux = `Descricao: ${t.descricao}`;
        aux += `, valor do imposto: ${t.valorImposto.toFixed(2)}`;
        if (isTransportavel(t)){
            aux += `, fragil: ${t.fragil}`;
            aux += `, valor frete: R$ ${t.valorFrete}`;
        }
        console.log(aux);
    }
}

// Dinamica 1
// Letra A
function qtdadeProdsServ(taxaveis){
    validate(taxaveis,"Array.<#Taxavel>");
    let qp = 0;
    let qs = 0;
    for(let t of taxaveis){
        if (t instanceof Produto){
            qp++;
        }
        if (t instanceof Servico){
            qs++;
        }
    }
    return{
        "qtdadeProd":qp,
        "qtdadeServ":qs
    };
}

// Letra B
function impostoMedioVeiculos(taxaveis){
    validate(taxaveis,"Array.<#Taxavel>");
    let soma = 0;
    let c = 0;
    for(let t of taxaveis){
        if (t instanceof Veiculo){
            soma += t.valorImposto;
            c++;
        }
    }
    let impostoMedio = soma/c;
    return{
        "impostoMedio":impostoMedio
    };
}
// letra C
function qtdadeTransportaveis(entregaveis){
    validate(entregaveis,"Array.<Entregavel>");
    let t = 0;
    for(let e of entregaveis){
        if (isTransportavel(e)){
            t++;
        }
    }
    return{
        "qtdadeTransportaveis":t
    };
}

// letra D
function freteTotal(transportaveis){
    validate(transportaveis,"Array.<#Transportavel>");
    let soma = 0;
    for(let t of transportaveis){
        soma+= t.valorFrete;
    }
    return{
        "custoTotalFrete":soma
    };
}
let ps = [];
ps.push(new Produto('Banana',10.50));
ps.push(new Servico(104,'Consultoria financeira',200));
ps.push(new Veiculo("AZ9664",2020,98000));
//ps.push(new ServicoVoluntario(202,"Aulas para vulneráveis","Jorge Luis"));
ps.push(new Produto('Uva',8.30));
ps.push(new Servico(105,'Consultoria TI',300));
ps.push(new Veiculo("AK7336",2015,73000));

//listaEntregaveis(ps);
//listaTaxaveis(ps);

console.log("Primeira lista:");
console.log(qtdadeProdsServ(ps));
console.log(impostoMedioVeiculos(ps));

let lst = [];
lst.push(new Produto('Banana',10.50));
lst.push(new Servico(104,'Consultoria financeira',200));
lst.push(new ServicoVoluntario(202,"Aulas para vulneráveis","Jorge Luis"));
lst.push(new Produto('Uva',8.30));
lst.push(new Servico(105,'Consultoria TI',300));
console.log("Segunda lista:");
console.log(qtdadeTransportaveis(lst));

let prods = [];
prods.push(new Produto('Banana',10.50));
prods.push(new Produto('Uva',8.30));
prods.push(new Produto('Maca',5.30));
prods.push(new Produto('melao',9.90));
console.log("Terceira lista:");
console.log(freteTotal(prods));