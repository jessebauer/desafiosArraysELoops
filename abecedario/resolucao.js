let soma = 0;
let palavras = ["mamao",
    "maca",
    "melao",
    "melancia",
    "laranja"];
let letra = "m";

for (let letraEscolhida of palavras) {
    if (letraEscolhida[0] === letra) {

    } else {
        soma++
    }
}

console.log(soma);