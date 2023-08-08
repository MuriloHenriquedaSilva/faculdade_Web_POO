import { validate } from "bycontract";
import promptsync from 'prompt-sync';

class Vagao {
    #id;
    #capCarga;

    static idGen = 0;

    constructor(capCarga) {
        validate(arguments, ['Number']);
        if (capCarga <= 0) {
            this.#id = -1;
        } else {
            this.#capCarga = capCarga;
            Vagao.idGen++;
            this.#id = Vagao.idGen;
        }
    }
    get id() {
        return this.#id;
    }
    get capCarga() {
        return this.#capCarga;
    }

    toString() {
        let str = 'Vagão: ' + this.#id + ', CapCarga: ' + this.#capCarga;
        return str;
    }
}

class GaragemVagoes {
    #vagoes;
    constructor() {
        this.#vagoes = [];
    }
    estaciona(vagao) {
        validate(vagao, Vagao);
        if (vagao.id === -1) {
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
        validate(id, 'number');
        let v = undefined;
        if (this.quantidade() > 0) {
            for (let i = 0; i < this.quantidade(); i++) {
                if (this.#vagoes[i].id === id) {
                    v = this.#vagoes.splice(i, 1)[0];
                    break;
                }
            }
        }
        return v;
    }
}

const prompt = promptsync();

let garagem = new GaragemVagoes();

while (true) {
    console.log("\nOpções:");
    console.log("<1> Listar todos os vagões da garagem");
    console.log("<2> Listar os vagões com capacidade maior ou igual a indicada");
    console.log("<3> Remover um vagão pelo identificador");
    console.log("<4> Estacionar um novo vagão");
    console.log("<5> Sair");

    const opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case '1':
            console.log("Vagões na garagem:");
            for (let v of garagem.vagoes) {
                console.log(v.toString());
            }
            break;

        case '2':
            const capacidadeMinima = parseFloat(prompt("Digite a capacidade mínima: "));
            console.log("Vagões com capacidade maior ou igual a", capacidadeMinima);
            for (let v of garagem.vagoes) {
                if (v.capCarga >= capacidadeMinima) {
                    console.log(v.toString());
                }
            }
            break;

        case '3':
            const idRemover = parseInt(prompt("Digite o ID do vagão a ser removido: "));
            const vagaoRemovido = garagem.retira(idRemover);
            if (vagaoRemovido) {
                console.log("Vagão removido:", vagaoRemovido.toString());
            } else {
                console.log("Nenhum vagão encontrado com o ID especificado.");
            }
            break;

        case '4':
            const capacidadeNovoVagao = parseFloat(prompt("Digite a capacidade do novo vagão: "));
            const novoVagao = new Vagao(capacidadeNovoVagao);
            garagem.estaciona(novoVagao);
            console.log("Novo vagão estacionado:", novoVagao.toString());
            break;

        case '5':
            console.log("Saindo do programa.");
            process.exit(0);

        default:
            console.log("Opção inválida. Digite um número entre 1 e 5.");
    }
}
