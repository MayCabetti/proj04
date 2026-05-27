let numeros = [ ]; 
let contador = 0;
let procurar;

for (let i = 0; i < 10; i++) {
    let valor = prompt("Digite um número:");
    numeros.push(Number(valor));
}

procurar = Number(prompt("Digite um número para verificar:"));

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === procurar) { //“o número da posição atual é igual ao número procurado?”
        contador++;
    }
}

alert(`Esses são seus número: ${numeros}`);
alert(`Seu número escolhidos se repete ${contador}`);