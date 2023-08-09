import { validate } from "bycontract";
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

// Classe imutável
class Vagao {
    #id;
    #capCarga;

    static #idGen = 0;

    constructor(capCarga) {
        validate(arguments, ["Number"]);
        if (capCarga <= 0) {
            this.#id = -1;
        } else {
            this.#capCarga = capCarga;
            Vagao.#idGen++;
            this.#id = Vagao.#idGen;
        }
    }

    get id() {
        return this.#id;
    }

    get capCarga() {
        return this.#capCarga;
    }

    toString() {
        let str = `[Vagao: ${this.#id}, CapCarga: ${this.#capCarga}]`;
        return str;
    }
}

class GaragemVagoes {
    #vagoes;

    constructor() {
        this.#vagoes = [];
    }

    estaciona(vagao) {
        validate(arguments, [Vagao]);
        if (vagao.id == -1) {
            return false;
        }
        this.#vagoes.push(vagao);
        return true;
    }

    quantidade() {
        return this.#vagoes.length;
    }

    get vagoes() {
        return this.#vagoes.values();
    }

    retira(id) {
        validate(id, "Number");
        let v = undefined;
        if (this.quantidade() > 0) {
            for (let i = 0; i < this.quantidade(); i++) {
                if (this.#vagoes[i].id === id) {
                    v = this.#vagoes.splice(i,1);
                    break;
                }
            }
        }
        return v;
    }
}
// ---------------------------------------
function listarTodosVagoes(garagem){
    validate(garagem,GaragemVagoes);
    for(let vagao of garagem.vagoes){
        console.log(vagao.toString());
    }
}

function listarVagoesCapacidade(garagem){
    validate(garagem,GaragemVagoes);
    let capacidade = Number(prompt("Capacidade? "));
    let qtdade = 0;
    for(let vagao of garagem.vagoes){
        if (vagao.capCarga === capacidade){
            console.log(vagao.toString());
            qtdade++;
        }
    }
    console.log(`${qtdade} vagoes encontrados.`)
}

function removerPorId(garagem){
    validate(garagem,GaragemVagoes);
    let id = Number(prompt("id do vagão a ser retirado? "));
    let result = garagem.retira(id);
    if (id === undefined){
        console.log("vagão não encontrado");
    }else{
        console.log('Vagão retirado com sucesso');
    }
}

function estacionarNovo(garagem){
    validate(garagem,GaragemVagoes);
    let cap = Number(prompt("Capacidade de carga do novo vagão: "));
    let nv = new Vagao(cap);
    garagem.estaciona(nv);
    console.log("Novo vagão estacionado!")
}

// ---------------------------------------
let gv = new GaragemVagoes();
gv.estaciona(new Vagao(5000));
gv.estaciona(new Vagao(10000));
gv.estaciona(new Vagao(15000));
gv.estaciona(new Vagao(5000));
gv.estaciona(new Vagao(10000));
gv.estaciona(new Vagao(15000));
gv.estaciona(new Vagao(15000));
gv.estaciona(new Vagao(5000));

let terminou = false;

while(!terminou){
    console.log("Opções:");
    console.log("<1> - Listar os vagoes na garagem");
    console.log("<2> - Listar os vagoes com uma certa capacidade");
    console.log("<3> - Remover um vagão pelo id");
    console.log("<4> - Estacionar novo vagao");
    console.log("<5> - Encerrar");
    let opcao = prompt("Entre sua opção: ");
    switch(opcao){
        case '1':
            listarTodosVagoes(gv);
            break;
        case '2':
            listarVagoesCapacidade(gv);
            break;
        case '3':
            removerPorId(gv);
            break;
        case '4':
            estacionarNovo(gv);
            break;
        case '5':
            terminou = true;
            break;
        default:
            console.log('Opção inválida!');
    }
    console.log('-----------');
}
