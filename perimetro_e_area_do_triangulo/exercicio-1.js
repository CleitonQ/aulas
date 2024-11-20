// Obtenha os lados do triângulo usando o prompt
const ladoA = parseFloat(prompt("Digite o comprimento do lado A:"));
const ladoB = parseFloat(prompt("Digite o comprimento do lado B:"));
const ladoC = parseFloat(prompt("Digite o comprimento do lado C:"));

// Verifica se os lados são números válidos
if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    document.getElementById('resultado').innerHTML = "Por favor, insira valores numéricos válidos.";
} else {
    // Calcule o perímetro do triângulo
    const perimetro = ladoA + ladoB + ladoC;

    // Calcula a área usando a fórmula de Heron
    const sp = perimetro / 2; // Semiperímetro
    const area = Math.sqrt(sp * (sp - ladoA) * (sp - ladoB) * (sp - ladoC));

    // Exiba os resultados na div
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <strong>Resultados do Triângulo:</strong><br>
        Perímetro do triângulo: ${perimetro}<br>
        Área do triângulo: ${area.toFixed(2)} <!-- Formata a área para 2 casas decimais -->
    `;
}