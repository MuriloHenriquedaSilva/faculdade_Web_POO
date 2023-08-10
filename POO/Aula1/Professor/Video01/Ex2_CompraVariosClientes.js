// Necessita executar npm install prompt-sync
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// -------------------------------------
// Exemplo 2: compra com varios clientes 
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
resp = prompt('Quantos clientes para dividir a conta? ');
let qtdadeClientes = Number(resp);
let custoPorCliente = custoTotal / qtdadeClientes;
console.log("\n");
console.log("Recibo:")
console.log(`Suco: R$ ${valorSuco.toFixed(2)}, quantidade: ${qtdadeSuco}, Total: R$ ${despesaComSuco.toFixed(2)}`)
console.log(`Sanduiche: R$ ${valorSanduiche.toFixed(2)}, quantidade: ${qtdadeSanduiches}, Total: R$ ${despesaComSanduiche.toFixed(2)}`)
console.log(`Custo total a pagar: R$ ${custoTotal.toFixed(2)}`);
console.log(`Quantidade de clientes: ${qtdadeClientes}`);
console.log(`Total a pagar por cliente: R$ ${custoPorCliente.toFixed(2)}\n`);