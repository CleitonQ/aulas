// Solicita que o usuário insira o primeiro número
let numero1 = prompt("Digite o primeiro número:");

// Solicita que o usuário insira o segundo número
let numero2 = prompt("Digite o segundo número:");

// Converte os valores inseridos pelo usuário para números
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Exibe o resutado
alert(`Resultado da soma: ${numero1 + numero2}
    Resultado da subtração: ${numero1 - numero2}
    Resultado da multiplicação: ${numero1 * numero2}
    Resultado da divisão: ${numero1 / numero2}`);