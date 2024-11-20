    // Solicita que o usuário insira o primeiro número
    let numero1 = prompt("Digite o primeiro número:");

    // Solicita que o usuário insira o segundo número
    let numero2 = prompt("Digite o segundo número:");
    
    // Converte os valores inseridos pelo usuário para números
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    
    // Verifica se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos.");
    } else {
        // Exibe o resultado
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
            <strong>Resultados:</strong><br>
            Resultado da soma: ${numero1 + numero2}<br>
            Resultado da subtração: ${numero1 - numero2}<br>
            Resultado da multiplicação: ${numero1 * numero2}<br>
            Resultado da divisão: ${numero2 !== 0 ? (numero1 / numero2) : "Divisão por zero não é permitida."}
        `;
    }

