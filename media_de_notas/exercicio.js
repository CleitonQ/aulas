// Cria as variáveis necessárias
let totalNotas = 0;
let quantidadeNotas = 0;
let nota;
const SAIR = -1; // Constante para o valor de saída

do {
    // Solicita a nota e converte para um valor numérico
    nota = parseFloat(prompt("Digite a nota do aluno (ou -1 para sair e calcular a média):"));

    // Verifica se a entrada é um número
    if (!isNaN(nota)) {
        // Se o usuário inseriu uma nota válida, soma a nota no total
        if (nota !== SAIR) {
            totalNotas += nota;
            quantidadeNotas++;
        }
    } else {
        alert("Por favor, insira um número válido.");
    }
} while (nota !== SAIR); // Se a nota for -1, encerra o loop

// Exibe o resultado na div de resultados
const resultadoDiv = document.getElementById("resultado");

if (quantidadeNotas === 0) {
    resultadoDiv.innerHTML = "Nenhuma nota foi inserida.";
} else {
    // Calcula a média
    let media = totalNotas / quantidadeNotas;
    resultadoDiv.innerHTML = `A média das notas é: ${media.toFixed(2)}`;
}


