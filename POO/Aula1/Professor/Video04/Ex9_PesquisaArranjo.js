// Necessita executar npm install prompt-sync
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// ----------------------------------------------
// Exercicio 9: idades dos companheiros de turma
// ----------------------------------------------

let idades = [];
let terminou = false;
let cont = 0;
while(!terminou){
    let idade = prompt(`Entre a idade do ${cont+1}o colega: `);
    if (Number(idade) < 0){
        break;
    }
    idades[cont] = Number(idade);
    cont++;
}

let resp = prompt('Que idade deseja verificar a frequencia? ');
let idadeFreq = Number(resp);
let freq = 0;
let maiores = 0;
for(let i=0;i<idades.length;i++){
    if (idades[i] == idadeFreq){
        freq++;
    }
    if (idades[i] > idadeFreq){
        maiores++;
    }
}
console.log(`\nColegas com ${idadeFreq} anos: ${freq}.`);
console.log(`${maiores} colegas com mais de ${idadeFreq} anos.`)




