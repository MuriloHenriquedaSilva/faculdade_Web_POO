// Necessita executar npm install prompt-sync
import { validate } from 'bycontract';
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// ----------------------------------------------
// Exercicio 13: media array
// ----------------------------------------------
function media(valores){
  validate(arguments,["Number[]"]);
  let m = 0;
  for(let val of valores){
    m += val;
  }
  return m / valores.length;
}

let m = media([12,12,10,12,14]);
console.log(m);