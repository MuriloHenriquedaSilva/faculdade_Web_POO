// Necessita executar npm install prompt-sync
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// ------------------------------------------
// Exercicio 6: extrator de substring
// ------------------------------------------

let texto = prompt("Entre um texto: ");
let posAbre = texto.indexOf("(");
let posFecha = texto.indexOf(")");
if (posAbre == -1 || posFecha == -1){
    console.log("O texto informado não contem trecho entre parênteses");
}else{
    let destaque = texto.substring(posAbre+1,posFecha);
    console.log(destaque.toUpperCase());
}