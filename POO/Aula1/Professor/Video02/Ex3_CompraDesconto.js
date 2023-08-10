// Necessita executar npm install prompt-sync
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// -------------------------------------
// Exemplo 3: compra com desconto acima de 10 unidades
// -------------------------------------
const valorSuco = 5.2;
const valorSanduiche = 12;

let resp = prompt("Quantos copos de suco você deseja?");
let qtdadeSuco = parseInt(resp);
resp = prompt("Quantos sanduiches você deseja?");
let qtdadeSanduiches = parseInt(resp);

let despesaComSuco = qtdadeSuco * valorSuco;
let descontoSuco = 0; 
if (qtdadeSuco >= 10){
    descontoSuco = despesaComSuco * 0.2;
}

let despesaComSanduiche = qtdadeSanduiches*valorSanduiche;
let descontoSanduiche = 0;
if (qtdadeSanduiches >= 10){
    descontoSanduiche = despesaComSanduiche * 0.2;
}

let custoTotal = (despesaComSuco-descontoSuco) + (despesaComSanduiche-descontoSanduiche);

console.log("\n");
console.log("Recibo:")
console.log(`Suco: ${valorSuco}, quantidade: ${qtdadeSuco}, valor sem desconto: ${despesaComSuco.toFixed(2)}, valor do desconto: ${descontoSuco.toFixed(2)}, total: R$ ${(despesaComSuco-descontoSuco).toFixed(2)}`)
console.log(`Sanduiche: ${valorSanduiche}, quantidade: ${qtdadeSanduiches}, valor sem desconto: ${despesaComSanduiche.toFixed(2)}, valor do desconto: ${descontoSanduiche.toFixed(2)}, total: R$ ${(despesaComSanduiche-descontoSanduiche).toFixed(2)}`)
console.log(`Custo total a pagar: R$ ${custoTotal.toFixed(2)}\n`);