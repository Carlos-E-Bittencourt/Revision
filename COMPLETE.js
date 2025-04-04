//EX1
let quantosNumeros = prompt('Quantos números você deseja somar?');
let somaFinal = 0;

for(let i = 0; i < quantosNumeros; i++){
    let numero = prompt('Digite um numero a ser somado: ');
    somaFinal = parseInt(somaFinal) + parseInt(numero);
}

console.log('A soma final deu: ' + somaFinal);

//EX2
let contagem = 10;

function contagemRegressiva(){
    setInterval(() => {
        console.log(contagem);
        contagem--; 
       
        if (contagem < 0) {
          console.log("LANÇAMENTO!!!");
          clearInterval(contagemRegressiva); 
        }
      }, 1000);
} 

contagemRegressiva();

//EX3
let gastoTotal = 0;
let ganhoFinal = 0;
let saldoFinal = 0;

for(let i = 0; i < 12; i++){
    let gastos = prompt('Quanto a empresa gastou no mês ', i,'?');
    gastoTotal = parseInt(gastoTotal) + parseInt(gastos);
}
for(let i = 0; i < 12; i ++){
    let ganhos = prompt('Quanto a empresa ganhou no mês ', i,'?');
    ganhoFinal = parseInt(ganhoFinal)+ parseInt(ganhos);
}

saldoFinal = parseInt(ganhoFinal) - parseInt(gastoTotal);

console.log('O gasto anual da empresa foi de R$ ', gastoTotal, ',00');
console.log('O lucro total da empresa no ano foi de R$ ', ganhoFinal, ',00');
console.log('O saldo da empresa, no final do ano, foi de ', saldoFinal, ',00');

function verificarLucro(saldoFinal){
    if(saldoFinal > 0){
        console.log('Tu teve lucro pae. O lucro foi de: R$ ', saldoFinal, ',00');
    } else {
        console.log('Tu teve prejuízo pae. Tu perdeu: R$ ', saldoFinal, ',00');
    }
}

verificarLucro(saldoFinal);


//EX4
let numbers = [];

for(let i = 0; i < 4; i++){
    numbers[i] = prompt('Digite um número');
}

numbers.sort((a,b) => b - a);

console.log(numbers);