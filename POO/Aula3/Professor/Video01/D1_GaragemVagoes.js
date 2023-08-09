import { validate } from "bycontract";

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

let gv = new GaragemVagoes();

gv.estaciona(new Vagao(5000));
gv.estaciona(new Vagao(10000));
gv.estaciona(new Vagao(15000));
gv.estaciona(new Vagao(5000));
gv.estaciona(new Vagao(10000));
gv.estaciona(new Vagao(15000));
gv.estaciona(new Vagao(15000));
gv.estaciona(new Vagao(5000));

for(let v of gv.vagoes){
    console.log(v.toString());
}

let v = gv.retira(4);
v = gv.retira(1);
v = gv.retira(2);
v = gv.retira(3);
v = gv.retira(5);
v = gv.retira(6);
//v = gv.retira(7);
v = gv.retira(8);
gv.estaciona(new Vagao(15000));
console.log("Vagao retirado: "+v.toString());

console.log("Restantes na garagem: ");
for(let v of gv.vagoes){
    console.log(v.toString());
}
