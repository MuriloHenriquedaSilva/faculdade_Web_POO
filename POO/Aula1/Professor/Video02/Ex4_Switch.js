// Necessita executar npm install prompt-sync
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// -------------------------------------
// Exemplo 4: comando switch
// -------------------------------------
let precoDoIngresso = 500.0;
let categoria = prompt('Qual a categoria do comprador? ');
let valorCobrado = precoDoIngresso;
switch(categoria){
    case 'crianca':
        valorCobrado = 0;
        break;
    case 'convidado':
        valorCobrado = valorCobrado * 0.75;
        break;
    case 'funcionarioIdoso':
        valorCobrado = valorCobrado * 0.5;
    case 'idoso':
    case 'funcionario':
        valorCobrado = valorCobrado * 0.5;
        break;
    case 'geral':
        break;
    default:
        valorCobrado = NaN;
}
if (!isNaN(valorCobrado)){
    console.log(`Valor cobrado: R$${valorCobrado.toFixed(2)}`);
}else{
    console.log('Categoria inválida');
}