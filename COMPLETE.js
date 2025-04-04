//EX
let quantosNumeros = prompt('Quantos números você deseja somar?');
let somaFinal = 0;

for(let i = 0; i < quantosNumeros; i++){
    let numero = prompt('Digite um numero a ser somado: ');
    somaFinal = parseInt(somaFinal) + parseInt(numero);
}

console.log('A soma final deu: ' + somaFinal);