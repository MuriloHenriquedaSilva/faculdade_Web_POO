let nomes = ["Beatriz", "Carlos", "João", "Ana"];
nomes.sort((a,b) => {
    const nomeA = a.toLocaleLowerCase();
    const nomeB = b.toLocaleLowerCase();
    return nomeA.localeCompare(nomeB);
});
console.log(nomes);
