import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
//npm install prompt-sync - todo projeto novo


const notamin = 7.0;
let nome = prompt("Qual seu nome? ")
let nota1 = Number(prompt("Insira sua N1: "))
let nota2 = Number(prompt("Insira sua N2: "))
let media = (nota1 + nota2)/2;

console.log(nome,'sua média é',media)