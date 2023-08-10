import { validate } from "bycontract";
import nReadlines from "n-readlines";

class ElementoDeTrem {
    #id;
    #livre;

    constructor(id) {
        validate(id, "Number");
        if (id <= 0) {
            throw new Error("Dados invalidas");
        }
        this.#id = id;
        this.#livre = true;
    }

    get id() {
        return this.#id;
    }

    get livre() {
        return this.#livre;
    }

    ocupa() {
        this.#livre = false;
    }

    libera() {
        this.#livre = true;
    }

    toString() {
        let str = `${this.#id}, Livre: ${(this.#livre) ? 'sim' : 'não'}`;
        return str;
    }
}

class Locomotiva extends ElementoDeTrem {
    #potencia;

    constructor(id, potencia) {
        validate(id, "number");
        validate(potencia, "number");
        super(id);
        if (potencia <= 0) throw new Error('Potencia invalida');
        this.#potencia = potencia;
    }

    get potencia() {
        return this.#potencia;
    }

    toString() {
        return '[Locomotiva - ' +
            super.toString() +
            `, potencia: ${this.potencia}]`;
    }
}

class Vagao extends ElementoDeTrem {
    #capCarga;

    constructor(id, capCarga) {
        validate(id, "number");
        validate(capCarga, "number");
        super(id);
        if (capCarga <= 0) throw new Error('Capacidade de carga invalida');
        this.#capCarga = capCarga;
    }

    get capCarga() {
        return this.#capCarga;
    }

    toString() {
        return '[Vagao - ' +
            super.toString() +
            `, capacidade de carga: ${this.capCarga}]`;
    }
}

class GaragemFerroviaria {
    #elementosTrem;

    constructor(narq) {
        validate(narq, "string");
        this.#elementosTrem = [];
        this.carregaDados(narq);
    }

    carregaDados(narq) {
        validate(narq, "string");
        let arq = new nReadlines(narq);
        let buf = "";
        let line = "";
        let dados = "";

        // Pula a primeira linha
        arq.next();
        // Enquanto houverem linhas (leitura síncrona)
        while (buf = arq.next()) {
            line = buf.toString('utf8');
            dados = line.split(",");
            let id = Number(parseInt(dados[0]));
            let tipo = dados[1];
            let potencia = Number(parseInt(dados[2]));
            let capCarga = Number(parseInt(dados[3]));
            switch(tipo){
                case 'V':
                    let vagao = new Vagao(id, capCarga);
                    this.#elementosTrem.push(vagao);
                    break;
                case 'L':
                    let locomotiva = new Locomotiva(id, potencia);
                    this.#elementosTrem.push(locomotiva);
                    break;
                default:
                    throw new Error('Elemento invalido')
                }
        }
    }

    get elementosTrem() {
        return this.#elementosTrem.values();
    }
}


let g = new GaragemFerroviaria("LocomotivasVagoes.csv");
let cont = 0;
//Marca como ocupados até 4 vagoes para 5000Kg
for (let e of g.elementosTrem) {
    if (e instanceof Vagao && e.capCarga === 5000) {
        e.ocupa();
        cont++;
        if (cont === 4) break;
    }
}
// Exibe a lista dos carros estacionados
for (let e of g.elementosTrem) {
    console.log(e.toString());
}