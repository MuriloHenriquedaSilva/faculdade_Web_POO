import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
import { validate } from "bycontract";

/*let idades = [];
let terminou = false;
let cont = 0;
while (!terminou) {
    let idade = Number(prompt("Insira a idade do colega " + cont+": "));
    if (Number(idade) === -1) {
        break;
    }
    idades[cont] = idade;
    cont++;
}
let resp = prompt("De qual idade deseja verificar a frequência: ");
let iddFreq = Number(resp);
let freq = 0;
let maiores = 0;
for (let i = 0; i < idades.length; i++) {
    if (idades[i] === iddFreq) {
        freq++;
    }
    if (idades[i] > iddFreq) {
        maiores++;
    }
}
console.log("Quantidade de colegas com", iddFreq, "anos:", freq);
console.log("Quantidade de colegas com idade maior que", iddFreq, ":", maiores);*/

function randomInt(min, max) {
    validate(arguments,["Number","Number"])
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arranjoToString(dados) {
    return "[" + dados.join("][") + "]";
}

function multNeg(lista) {
    validate(lista,"Number[]")
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < 0) {
            lista[i] *= -2; // Multiplica por -2 e atribui o resultado de volta ao elemento do array
        }
    }
    return lista;
}

function maiorMenor(lista,maior) {
    validate(arguments,["Number[]",'boolean'])
    let resp = lista[0];
    if (maior == true){
        let menor = lista[0];
        for (let i = 1; i < lista.length; i++) {
            if (resp < lista[i]) {
                resp = lista[i];
        }
    }
}
    else{
        let menor = lista[0];
        for (let i = 1; i < lista.length; i++) {
            if (resp > lista[i]) {
                resp = lista[i];
        }
    }
    }
    
    return resp;
}

let nros = new Array(100);
for (let i = 0; i < 100; i++) {
    nros[i] = randomInt(-100, 100);
}

console.log("Array original:", arranjoToString(nros));
console.log("Array com números negativos multiplicados por -2:", arranjoToString(multNeg(nros)));
console.log("Maior valor do array:", maiorMenor(nros,true));

