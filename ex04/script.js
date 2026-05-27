let numeros = [];
let semDuplicados = [];

// Ler 10 números
for (let i = 0; i < 10; i++) {
    let valor = Number(prompt("Digite um número:"));
    numeros.push(valor);
}

// Remover duplicados
for (let i = 0; i < numeros.length; i++) {

    if (!semDuplicados.includes(numeros[i])) {
        semDuplicados.push(numeros[i]);
    }

}

alert(`Vetor original: ${numeros}`);
alert(`Sem duplicados: ${semDuplicados}`);