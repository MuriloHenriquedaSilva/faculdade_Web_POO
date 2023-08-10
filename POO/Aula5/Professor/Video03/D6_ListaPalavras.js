import nReadlines from "n-readlines";

let arq = new nReadlines('textosimples.txt');
let buf;
let linha;
let dados
let sep = new Set([',', '.', '!', '?', '-', '(', ')']);

let palavras = new Set();
while (buf = arq.next()) {
    linha = buf.toString('utf8');
    dados = linha.split(' ');
    for (let palavra of dados) {
        palavra = palavra.trim();
        if (palavra.size != 0) {
            let ult = palavra.at(palavra.size - 1);
            if (sep.has(ult)) {
                palavra = palavra.slice(0, palavra.size - 1);
            }
            let prim = palavra.at(0);
            if (sep.has(prim)) {
                palavra = palavra.slice(1, palavra.size - 1);
            }
            palavras.add(palavra);
        }
    }
}

console.log(`O texto tem ${palavras.size} palavras diferentes: `);
let str = '';
for (let pal of palavras) {
    str += '[' + pal + ']';
}
console.log(str);
