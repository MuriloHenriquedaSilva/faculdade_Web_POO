import { validate } from 'bycontract';
class Carro{
    placa;
    marcaModelo;
    tamTanque;
    combNoTanque;
    consumo;

    combustivelNecessario(distancia){
        validate(distancia,"Number");
        return distancia/this.consumo;
    }

    podeViajar(distancia){
        validate(distancia,"Number");
        let cbNec = this.combustivelNecessario(distancia);
        if ( cbNec <= this.combNoTanque){
            return true;
        }else{
            return false;
        }
    }

    toString(){
        let str = `Placa: ${this.placa}, MarcaModelo: ${this.marcaModelo}\n`;
        str += `Tamanho tanque: ${this.tamTanque}, combustivel no tanque: ${this.combNoTanque}\n`;
        str += `Consumo: ${this.consumo}`;
        return str;
    }
}

let c1 = new Carro();
c1.placa = "ABC1023";
c1.marcaModelo = "Chevrolet/Corsa";
c1.tamTanque = 45;
c1.combNoTanque = 30;
c1.consumo = 12;
console.log(c1.toString());
let distancia = 300;
let cbNec = c1.combustivelNecessario(distancia);
console.log(`Combustivel necessário para viajar ${distancia}: ${cbNec}`);
if (c1.podeViajar(distancia) == true){
    console.log('Pode viajar!');
}else{
    console.log('Não pode viajar, abasteça primeiro');
}

console.log("Outra referencia: ");
let c2 = c1;
console.log(c2.toString());
c1.combNoTanque -= 20;
console.log("Depois de alterar com outra referencia: "+c2.toString());
