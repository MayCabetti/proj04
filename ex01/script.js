let numeros = []; //Cria um vetor onde os valores podem ser adicionados
let soma = 0;

for (let i = 0; i < 10; i++) {
    let valor = prompt("Digite um número:");
    numeros.push(Number(valor));
}
//.push > adiciona ao vetor 

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] %2 === 0){ //Seleciona os n° pares (n° que divididos por 2 tem resto 0)
        soma +=numeros[i];
    }
}
//.length pega o tamanho do vetor (significa que vai até a quant de objetos que o vetor tem)

alert(`A soma dos seus números pares é: ${soma}`);