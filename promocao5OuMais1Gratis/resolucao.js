
let soma = 0;
let precos = [100, 500, 100, 200, 50];
let menor = precos[0];
if (precos.length >= 5) {

    for (let unit of precos) {
        soma += unit;
    }
    for (let unit of precos) {
        if (unit < menor) {
            menor = unit;
        }
    }
    console.log(soma - menor);


} else {
    for (let unit of precos) {
        soma += unit;
    }
    console.log(soma);
}