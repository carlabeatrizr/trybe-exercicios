let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 0; i < array.length; i++) {
    if (menorPalavra.length > array[i].length) {
        menorPalavra = array[i];
    }
    if (maiorPalavra.length < array[i].length) {
        maiorPalavra = array[i];
    }
}
console.log("A menor palavra é: " + menorPalavra);
console.log("A maior palavra é: " + maiorPalavra);