class Aluno {
    #nome;
    #nota;
    constructor(nome, nota) {
        this.#nome = nome;
        this.#nota = nota;
    }
    get nome() {
        return this.#nome;
    }
    get nota() {
        return this.#nota;
    }
}

let alunos = [
    new Aluno("Ana", 9.5),
    new Aluno("Carlos", 6.0),
    new Aluno("Tatiana", 7.8)
];
let notas = alunos.map(a => a.nota);
console.log(notas);
