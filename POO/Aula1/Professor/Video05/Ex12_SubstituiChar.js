// Necessita executar npm install prompt-sync
import { validate } from 'bycontract';
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// ----------------------------------------------
// Exercicio 12: substitui tipos
// ----------------------------------------------
function substitui(frase,simbolo,soPrimeiro){
  validate(arguments,["string","string","boolean"]);
  if (simbolo.length != 1){
    return null;
  }
  let resp = '';
  let ok = false;
  for(let i=0;i<frase.length;i++){
    if (frase[i] === simbolo && !ok){
      resp = resp + "*";
      if (soPrimeiro == true){
        ok = true;
      }
    }else{
      resp = resp + frase[i];
    }
  }
  return resp;
}

let nf = substitui('Verificando tipos em JavaScript',' ',false);
console.log(nf);