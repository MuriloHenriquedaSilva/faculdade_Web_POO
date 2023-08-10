// Necessita executar npm install prompt-sync
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// -------------------------------------
// Exemplo 1: compra simples 
// -------------------------------------
const valorSuco = 5.2;
const valorSanduiche = 12;

let resp = prompt("Quantos copos de suco você deseja?");
let qtdadeSuco = Number(resp);
resp = prompt("Quantos sanduiches você deseja?");
let qtdadeSanduiches = parseInt(resp);
let despesaComSuco = qtdadeSuco * valorSuco;
let despesaComSanduiche = qtdadeSanduiches*valorSanduiche;
let custoTotal = despesaComSuco + despesaComSanduiche;
console.log("\n");
console.log("Recibo:")
console.log(`Suco: R$ ${valorSuco}, quantidade: ${qtdadeSuco}, Total: R$ ${despesaComSuco}`)
console.log(`Sanduiche: R$ ${valorSanduiche}, quantidade: ${qtdadeSanduiches}, Total: R$ ${despesaComSanduiche}`)
console.log(`Custo total a pagar: R$ ${custoTotal}\n`);