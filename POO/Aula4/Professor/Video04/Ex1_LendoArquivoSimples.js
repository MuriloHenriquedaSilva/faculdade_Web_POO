import { validate } from "bycontract";
import nReadlines from "n-readlines";

// Função que exibe os dados de um arquivo texto na tela
function exibeArquivo(narq){
  validate(narq,'string');
  // Localiza o arquivo na unidade de armazenamento
  let arq = new nReadlines(narq);
  let buf = "";

  // Enquanto houverem linhas (leitura síncrona)
  // Le o conteúdo da próxima linhas
  while (buf = arq.next()) {
    // Ajusta o formato dos caracteres
    let linha = buf.toString('utf8');
    // Exibe a linha na tela
    console.log(linha);
  }
}

console.log("--------------------");
exibeArquivo("TextoSimples.txt");
console.log("--------------------");

