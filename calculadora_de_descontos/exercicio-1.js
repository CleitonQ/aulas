 // Solicitar ao usuário o valor da compra
let valorCompra = parseFloat(prompt("Digite o valor da compra:"));

// Solicita ao usuário a porcentagem de desconto
let porcentagemDesconto = parseFloat(prompt("Digite a porcentagem de desconto:"));

// Verifica se os valores são válidos
if (isNaN(valorCompra) || isNaN(porcentagemDesconto)) {
    document.getElementById('resultado').innerHTML = "Por favor, insira valores numéricos válidos para a compra e o desconto.";
} else {
    // Calcula o valor do desconto
    let desconto = (porcentagemDesconto / 100) * valorCompra;

    // Calcula o total com o desconto aplicado
    let totalComDesconto = valorCompra - desconto;

    // Exibe os resultados usando template strings
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML += `
        <strong>Resultados do Desconto:</strong><br>
        Valor da compra: R$ ${valorCompra.toFixed(2)}<br>
        Valor do desconto: R$ ${desconto.toFixed(2)}<br>
        Total com desconto: R$ ${totalComDesconto.toFixed(2)}<br>
    `;
}