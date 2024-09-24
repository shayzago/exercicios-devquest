const numeros = [65, 44, 12, 4]

// numeros.forEach(function(numero) {
//     let multiplicacao = numero * 10;
//     console.log(`O resultado da multiplicação de ${numero} por 10 é: ${multiplicacao}`)
// })

numeros.forEach((numero) => {
    console.log(numero * 10);
})

// let pessoas = [
//   { nome: "João", idade: 30 },
//   { nome: "Maria", idade: 25 },
//   { nome: "Pedro", idade: 35 },
//   { nome: "Ana", idade: 28 },
// ];

// // Utilizando forEach para percorrer o array de pessoas
// pessoas.forEach(function (pessoa, indice, array) {
//   console.log(`Pessoa ${indice + 1}:`);
//   console.log(`Nome: ${pessoa.nome}`);
//   console.log(`Idade: ${pessoa.idade}`);
//   console.log("---");
// });