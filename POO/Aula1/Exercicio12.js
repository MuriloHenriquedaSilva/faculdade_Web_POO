import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

const valorSuco = 5.2;
const valorSanduiche = 12;

let resp = prompt("Quantos copos de suco você deseja?")
let qtdadeSuco = Number(resp)
resp = prompt("Quantos sanduiches você deseja?")
let qtdadeSanduiches = parseInt(resp);
let despesaComSuco = qtdadeSuco * valorSuco;

if(qtdadeSuco>10){
    despesaComSuco = despesaComSuco * 0.8;
}
let despesaComSanduiche = qtdadeSanduiches * valorSanduiche;
if(qtdadeSanduiches>10){
    despesaComSanduiche = despesaComSanduiche * 0.8;
}
let custoTotal = despesaComSuco + despesaComSanduiche;

console.log("\n")
console.log("Recibo: ")
console.log("Suco: R$",valorSuco.toFixed(2),"quantidade: ",qtdadeSuco.toFixed(2),"X","Total: R$",despesaComSuco.toFixed(2))
if(qtdadeSuco>10){
    console.log("Foi aplicado um desconto no suco")
}
console.log("Sanduiche: R$",valorSanduiche.toFixed(2),"Quantidade: ",qtdadeSanduiches.toFixed(2),"X","Total R$",despesaComSanduiche)
if(qtdadeSanduiches>10){
    console.log("Foi aplicado um desconto no sanduiche")
}
console.log("Total a pagar: R$ ",custoTotal.toFixed(2))