let soma = 0;
let sequencia = ">>><>";
for (passo of sequencia) {
    if (passo === ">") {
        soma++;
    } else if (passo === "<") {
        soma--;
    }
    if (soma > 6) {
        soma = 0
    } else if (soma < 0) {
        soma = 6
    }
}

console.log(soma)
