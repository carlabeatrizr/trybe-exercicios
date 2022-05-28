
function indexMenorValor(arr) {
    let maximo = arr[0];
    let indexMaximo = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < maximo) {
            indexMaximo = i;
            maximo = arr[i];
        }
    }
    return indexMaximo;
}
let arr = [2, 4, 6, 7, 10, 0, -3];
console.log(indexMenorValor(arr));