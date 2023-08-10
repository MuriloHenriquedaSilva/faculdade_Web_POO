// Necessita executar npm install prompt-sync
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// ----------------------------------------------
// Exercicio 11: operações sobre arranjos aleatorios
// ----------------------------------------------
function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
} 

function arranjoToString(dados){
  let str = "";
  for(let e of dados){
    str = str + '['+e+']';
  }
  return str;
}

function multiplicaNegativos(dados){
  for(let i=0;i<dados.length;i++){
    if (dados[i] < 0){
      dados[i] = dados[i] * -2;
    }
  }
}

function menorValor(dados){
  let menor = dados[0];
  for(let nro of dados){
    if (nro < menor){
      menor = nro;
    }
  }
  return menor;
}

const TAM = 10
let nros = new Array(TAM);
for(let i=0;i<TAM;i++){
  nros[i] = randomInt(-100,100);
}

console.log("Arranjo original:")
console.log(arranjoToString(nros));
let menor = menorValor(nros);
console.log(`Menor valor armazenado no arranjo: ${menor}`);
multiplicaNegativos(nros);
console.log('Arranjo multiplicado:')
console.log(arranjoToString(nros));






