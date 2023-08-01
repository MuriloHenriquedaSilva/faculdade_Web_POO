import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
let novoPreco = 0;
let preco = 10;
if (preco < 20){
    novoPreco = 50
}
console.log(novoPreco)