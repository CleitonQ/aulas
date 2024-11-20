// Função para calcular a tabuada
function calcularTabuada() {
    // Solicita ao usuário um número
    let numero = parseInt(prompt("Digite um número:"));
    let texto = "";

    // Verifica se a entrada é um número válido
    if (isNaN(numero)) {
        document.getElementById("resultado").innerText = "Por favor, digite um número válido.";
        return; // Sai da função se não for um número
    }

    // Loop de 1 a 10 para calcular a tabuada
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        // Acrescenta uma nova linha no texto final
        texto += `${numero} x ${i} = ${resultado}<br>`; // Usando <br> para quebra de linha no HTML
    }

    // Exibe o resultado na div
    document.getElementById("resultado").innerHTML = texto;
}

// Chama a função para calcular a tabuada
calcularTabuada();