
// Solicita ao usuário um número inteiro positivo
let num = parseInt(prompt("Digite um número inteiro positivo:"));
let fatorial = 1;

// Verifica se o número é válido
if (isNaN(num) || num < 0) {
    document.getElementById("resultado").innerText = "Por favor, digite um número inteiro positivo válido.";
} else {
    // Calcula o fatorial usando um loop for
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }

    // Exibe o resultado na div
    document.getElementById("resultado").innerHTML = `O fatorial de ${num} é ${fatorial}`;
}