// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Número máximo de tentativas
const maxTentativas = 10;
let tentativas = 0;

// Loop para adivinhar o número
for (tentativas = 1; tentativas <= maxTentativas; tentativas++){
    const palpite = parseInt(prompt(`Tentativa ${tentativas}/${maxTentativas}. Adivinhe o número (entre 1 e 100):`));

    if (isNaN(palpite) || palpite <1 || palpite > 100){
        alert("Por favor, insira um número válido entre 1 e 100.");
        tentativas--;
    } else if (palpite === numeroAleatorio){
        alert(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
        break;
    } else if (palpite < numeroAleatorio){
        alert("Tente um número maior.");
    }else {
        alert("Tente um número menor.");
    }
}

if (tentativas > maxTentativas){
    alert(`Suas ${maxTentativas} tentativas acabaram. O numero era ${numeroAleatorio}.`);
}
