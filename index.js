const prompt = require('prompt-sync')();

const peso = prompt('Qual o seu peso? ');
console.log(`O peso informado foi de ${peso} quilos`);

const altura = prompt('Qual a sua altura (em metros, com ponto divisor)? ');
console.log(`A altura informada foi de ${altura} `);

const imc = peso / (altura * altura)
console.log(`\nSeu IMC é ${imc}.\n`)
