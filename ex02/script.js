let numeros = [ ]; 
let aleatorio;

for (let i = 0; i < 7; i++) {
    aleatorio = Math.floor(Math.random() * 100);
    numeros.push(aleatorio);
}
//Math.random > Gera um n° aleatório entre 0 e 1
//* 100 > Multiplica o valor entre 0 e 1 por 100
//Math.floor > Remove a parte decimal do n°

alert(`Os números aleatórios são ${numeros}`)