let maiorNumero = 50;
let maiorPrimo = 0;

for (let numeroDaVez = maiorNumero; numeroDaVez >= 1; numeroDaVez--) {
    
    let qtdDivisores = 0;
    
    for (let divisores = numeroDaVez; divisores >= 1; divisores--) {
        if (numeroDaVez % divisores === 0) {
            qtdDivisores++
        }
    }
    if (qtdDivisores === 2) {
        maiorPrimo = numeroDaVez;
        console.log(maiorPrimo);
        break;
    }
}