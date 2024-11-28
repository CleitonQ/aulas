// Importamos cada função
import { dobro, somar, subtrair } from `./funcoes.js`;

// Criamos algumas funções auxiliares para cada parte do programa
function mostrarMenu() {
    const opcao = prompt(`Escolha uma operação:\n1. Dobro de um número\n2. Somar dois números\n3. Subtrair dois números\n4. Sair`)
    return parseInt(opcao)
}

function calcularDobro() {
    let numero = parseFloat(prompt("Digite um número:"));

    if (!isNaN(numero)) {
        let resultado = dobro(numero);
        alert(`O dobro de ${numero} é ${resultado}`);
    } else {
        alert("Por favor, insira um número válido.");
    }
}

function calcularSoma() {
    let numero1 = parseFloat(prompt("Digite o primerio número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (!isNaN(numero1) && !isNaN(numero2)){
        let resultado = somar(numero1, numero2);
        alert(`A soma de ${numero1} e ${numero2} é ${resultado}`);
    } else {
        alert("Por favor, insira números válidos.");
    }
}


