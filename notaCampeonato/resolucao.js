
let maior = '';
let menor = '';
let soma = 0;
let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

for (nota of notas) {
    if (maior === '' && menor === '') {
        maior = nota;
        menor = nota;
    }
    if (nota > maior) {
        maior = nota;
    }
    if (nota < menor) {
        menor = nota;
    }
    soma += nota;
}
let divisor = notas.length - 2;
let subtrair = maior + menor;
let media = (soma - subtrair) / (divisor);
console.log(media);


