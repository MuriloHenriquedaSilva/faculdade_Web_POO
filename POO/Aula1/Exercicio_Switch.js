import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
let categoria = prompt("Qual a categoria do comprador?")
let precoDoIngresso = 500.00;
let valorCobrado = precoDoIngresso;
switch(categoria){
    case 'criança':
        valorCobrado = 0;
        break;
    case 'convidado':
        valorCobrado = valorCobrado * 0.75;
        break;
    case 'fucnionarioIdoso':
        valorCobrado = valorCobrado * 0.5;
        break;
    case 'idoso':
        case 'funcionario':
            valorCobrado = valorCobrado * 0.5;
            break;
    case 'geral':
        break;
    default:
        valorCobrado = NaN;
}
if(!NaN(valorCobrado)){
    console.log("Valor cobrado: R$",valorCobrado)
}else{
    console.log("Inválido")
}
