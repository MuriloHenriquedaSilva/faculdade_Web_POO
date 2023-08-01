import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

const valorSuco = 5.2;
const valorSanduiche = 12;

let resp = prompt("Quantos copos de suco você deseja?")
let qtdadeSuco = Number(resp)
resp = prompt("Quantos sanduiches você deseja?")
let qtdadeSanduiches = parseInt(resp);
let despesaComSuco = qtdadeSuco * valorSuco;
let despesaComSanduiche = qtdadeSanduiches * valorSanduiche;
let custoTotal = despesaComSuco + despesaComSanduiche;

console.log("\n")
console.log("Recibo: ")
console.log("Suco: R$",valorSuco,"quantidade: ",qtdadeSuco,"X","Total: R$",despesaComSuco)
console.log("Sanduiche: R$",valorSanduiche,"Quantidade: ",qtdadeSanduiches,"X","Total R$",despesaComSanduiche)
console.log("Total a pagar: R$ ",custoTotal)