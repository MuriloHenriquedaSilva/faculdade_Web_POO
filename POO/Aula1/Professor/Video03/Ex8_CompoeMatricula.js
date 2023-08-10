// Necessita executar npm install prompt-sync
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// ------------------------------------------
// Exercicio 8: subprograma que monta um número de matricula com nivel de acesso
// Niveis de acesso: 01, 21, 35, 66, 67 e 88
// ------------------------------------------
function isDigit(umDigito){
    switch(umDigito[0]){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4': 
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            return true;
        default:
            return false;     
    }
}

function isNivelAcesso(nivel){
    switch(nivel){
        case '01':
        case '21':
        case '35':
        case '66':
        case '67': 
        case '88':
            return true;
        default:
            return false;     
    }
}

function numeroOk(numero){
    if (numero.length != 4){
        return false;
    }
    for(let i=0;i<numero.length;i++){
        if (!isDigit(numero[i])){
            console.log("nao e digito: "+numero[i]);
            return false;
        } 
    }
    return true;
}

function geraDigitoVerificador(numero){
    let digito = numero;
    let soma = 0;
    while(digito.length != 1){
        for(let i=0;i<digito.length;i++){
            soma = soma + Number(digito.at(i));
        }
        digito = String(soma);
        soma = 0;
    }
    return numero+'-'+digito;
}

function compoemNumeroDeMatricula(numero,acesso='21'){
    if (!isNivelAcesso(acesso) || !numeroOk(numero)){
        return null;
    }
    let numeroComposto = acesso + numero;
    return geraDigitoVerificador(numeroComposto);
}

console.log(compoemNumeroDeMatricula('2345','67'));
console.log(compoemNumeroDeMatricula('2345','68'));
console.log(compoemNumeroDeMatricula('345','67'));
console.log(compoemNumeroDeMatricula('2345'));