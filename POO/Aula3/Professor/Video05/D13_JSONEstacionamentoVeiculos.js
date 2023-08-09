import { validate } from "bycontract";

class Veiculo {
    proprietario;
    placa;

    constructor(proprietario, placa) {
        validate(arguments, ['String', 'String']);
        if (proprietario.length < 1 || !this.consistePlaca(placa)) {
            this.proprietario = 'none';
            this.placa = 'none';
        } else {
            this.proprietario = proprietario;
            this.placa = placa;
        }
    }

    get proprietario() {
        return this.proprietario;
    }

    get placa() {
        return this.placa;
    }

    // Usa uma expressão regular "RegExp"
    // para consistir uma placa de duas letras e quatro numeros
    consistePlaca(placa) {
        let regExp = /[A-Z]{2}[0-9]{4}/;
        return regExp.test(placa);
    }

    toString() {
        return `Proprietario: ${this.proprietario}, placa: ${this.placa}`;
    }
}

class Carro extends Veiculo {
    marca;
    cor;

    constructor(proprietario, placa, marca, cor) {
        super(proprietario, placa);
        this.marca = marca;
        this.cor = cor;
    }

    get marca() {
        return this.marca;
    }

    get cor() {
        return this.cor;
    }

    toString() {
        return super.toString() + `, marca: ${this.marca}, cor: ${this.cor}`;
    }
}

class Estacionamento {
    veiculos;

    constructor() {
        this.veiculos = [];
    }

    estacionados() {
        return this.veiculos.values();
    }

    estaciona(veiculo) {
        validate(veiculo, Veiculo);
        this.veiculos.push(veiculo);
    }

    liberaVeiculo(placa) {
        validate(placa, "string");
        let v = undefined;
        for (let i = 0; i < veiculos.quantidade(); i++) {
            if (this.veiculos[i].placa === placa) {
                v = this.veiculos.splice(i, 1);
                break;
            }
        }
        return v;
    }
}

let e = new Estacionamento();
e.estaciona(new Veiculo('Luis', 'AB1212'));
e.estaciona(new Carro('Carlos', 'AB1314', 'GM', 'Verde'));
console.log(JSON.stringify(e));