let stringCorrompida = "*Canis %lupus )familiaris";
let resolvido = '';
for (let resolver of stringCorrompida) {
    if (resolver === "!" || resolver === "@" || resolver === "#" || resolver === "$" || resolver === "%" || resolver === "&" || resolver === "*" || resolver === "(" || resolver === ")") {
    } else {
        resolvido += resolver;
    }
}
console.log(resolvido);