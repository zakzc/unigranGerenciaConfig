const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Informe o seu peso: ', peso => {
  readline.close();
  console.log(`O peso informado foi de ${peso} quilos.`);
});