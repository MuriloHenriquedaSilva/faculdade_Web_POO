function criaContaCorrente(numero,nome){
    let padrao = {saldo:0,limite:0,txRem:0.01};
    return {
        numero:numero,
        nome:nome,
        ...padrao
    }
}

let cta = criaContaCorrente(105,'Alberto');
console.log(cta);