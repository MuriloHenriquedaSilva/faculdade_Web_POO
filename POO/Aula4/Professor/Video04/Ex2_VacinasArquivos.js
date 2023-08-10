import { validate } from "bycontract";
import nReadlines from "n-readlines";
/*
Exemplo com leitura de dados de arquivos 

https://www.onlinedatagenerator.com/

*/
// Parte 1: leitura de arquivo e armazenamento em arranjos separados
// Variáveis globais
//const nReadlines = require('n-readlines');
let dadosVac = []

// Função que lê um arquivo texto com os dados
// sobre vacinação
const carregaDados = function(narq){
  let arq = new nReadlines(narq);
  let buf = "";
  let line = "";
  let dados = "";

  // Pula a primeira linha
  arq.next();
  // Enquanto houverem linhas (leitura síncrona)
  while (buf = arq.next()) {
    line = buf.toString('utf8');
    dados = line.split(",");
    dadosVac.push(
      {
        "cpf":parseInt(dados[0]),
        "nome":dados[1],
        "idade":parseInt(dados[2]),
        "doses":parseInt(dados[3])
      }
    );
  }
}

carregaDados("Vacinacao.csv");
// Exibe todos
for(let dado of dadosVac){
  console.log(dado);
}

console.log("Total de pessoas no cadastro:",dadosVac.length);
