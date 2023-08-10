import { validate } from 'bycontract';
class Carro{
    #placa;
    #marcaModelo;
    #tamTanque;
    #combNoTanque;
    #consumo;

    constructor(placa,marcaModelo,tamTanque,consumo){
        validate(arguments,['string','string','number','number']);
        this.#placa = placa;
        this.#marcaModelo = marcaModelo;
        if (tamTanque <= 0){
            this.#tamTanque = 45;
        }else{
            this.#tamTanque = tamTanque;
        }
        this.#combNoTanque = 0;
        if (consumo <= 0){
            this.#consumo = 10;
        }else{
            this.#consumo = consumo;
        }
    }

    get placa(){
        return this.#placa;
    }

    get marcaModelo(){
        return this.#marcaModelo
    }

    get tamTanque(){
        return this.#tamTanque;
    }

    get combNoTanque(){
        return this.#combNoTanque;
    }

    get consumo(){
        return this.#consumo;
    }

    abastece(qtdade){
        validate(qtdade,"Number");
        if (qtdade <= 0){
            return false;
        }
        if (this.combNoTanque + qtdade > this.#tamTanque){
            return false;
        }
        this.#combNoTanque += qtdade;
        return true;
    }

    combustivelNecessario(distancia){
        validate(distancia,"Number");
        if (distancia <= 0){
            return 0;
        }
        return distancia/this.consumo;
    }

    podeViajar(distancia){
        validate(distancia,"Number");
        if (distancia <= 0){
            return 0;
        }
        let cbNec = this.combustivelNecessario(distancia);
        if (cbNec > 0 && cbNec <= this.combNoTanque){
            return true;
        }else{
            return false;
        }
    }

    viaja(distancia){
        validate(distancia,"Number");
        if (this.podeViajar(distancia)){
            this.#combNoTanque -= this.combustivelNecessario(distancia);
            return true;
        }
        return false;
    }

    toString(){
        let str = `Placa: ${this.#placa}, MarcaModelo: ${this.#marcaModelo}\n`;
        str += `Tamanho tanque: ${this.#tamTanque}, combustivel no tanque: ${this.#combNoTanque}\n`;
        str += `Consumo: ${this.#consumo}`;
        return str;
    }
}

let c1 = new Carro("ABC1023","Chevrolet/Corsa",45,12);
console.log(c1.toString());
c1.abastece(30);
console.log(c1.toString());
let distancia = 300;
if (c1.podeViajar(distancia) == true){
    c1.viaja(distancia);
};
console.log(c1.toString());

