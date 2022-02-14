let lucrofinal = 0;
let somaFinal = [];
let resultado = 0;
let menorPrejuizo = 9999999999;
let precos = [30, 10, 54, 76, 1, 4, 35];

for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
        const compra = precos[i];
        const venda = precos[j];
        let prejuizo = compra - venda;
        if (prejuizo < menorPrejuizo && prejuizo > 0) {
            menorPrejuizo = prejuizo;
        }

    }
}

console.log(menorPrejuizo);
